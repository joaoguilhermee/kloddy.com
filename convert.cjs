const fs = require('fs');

const content = fs.readFileSync('original-landing.html', 'utf8');

// Extract CSS
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync('src/index.css', styleMatch[1]);
}

// Extract body
let bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
if (bodyMatch) {
  let bodyContent = bodyMatch[1];

  // Fix unclosed elements
  bodyContent = bodyContent.replace(/<img([^>]*)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  bodyContent = bodyContent.replace(/<source([^>]*)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  bodyContent = bodyContent.replace(/<br>/g, '<br />');

  // Convert class to className
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');

  // Remove <script> tags and keep logic for useEffect later if needed
  bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/g, '');

  // Convert style="..." to style={{...}}
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const obj = {};
    for (const rule of rules) {
      const parts = rule.split(':');
      if (parts.length >= 2) {
        let key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        // Convert key to camelCase
        key = key.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
        // wrap value in quotes
        obj[key] = value;
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // Convert onclick= to onClick= and remove javascript:void(0) usage
  bodyContent = bodyContent.replace(/onclick="([^"]*)"/g, 'onClick={() => setModalOpen(true)}');
  bodyContent = bodyContent.replace(/href="javascript:void\(0\)"/g, 'href="#"');
  bodyContent = bodyContent.replace(/<a href="#" className="audit-diff">/g, '<a href="#" className="audit-diff" onClick={(e) => e.preventDefault()}>');

  // Replace comment syntax
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Component wrapper
  const AppTsx = `import { useState, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const scoreObs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.score-bar-fill').forEach(bar => {
          const w = (bar as HTMLElement).style.width; 
          (bar as HTMLElement).style.width = '0';
          setTimeout(() => { (bar as HTMLElement).style.width = w; }, 150);
        });
      }
    }), { threshold: 0.3 });
    document.querySelectorAll('.eval-card').forEach(el => scoreObs.observe(el));
    
    // Video Ping-Pong Logic
    let isRewinding = false;
    const rewindSpeed = 0.05;
    const video = videoRef.current;
    
    let handleTimeUpdate = () => {
      if (video && !isRewinding && video.currentTime >= video.duration - 0.1) {
        isRewinding = true;
        video.pause();
      }
    };

    if (video) {
        video.addEventListener('timeupdate', handleTimeUpdate);
    }
    
    let reqId: number;
    let handlePingPong = () => {
      if (video && isRewinding) {
        if (video.currentTime > rewindSpeed) {
          video.currentTime -= rewindSpeed;
        } else {
          video.currentTime = 0;
          isRewinding = false;
          video.play();
        }
      }
      reqId = requestAnimationFrame(handlePingPong);
    }
    handlePingPong();
    
    return () => {
      if (video) video.removeEventListener('timeupdate', handleTimeUpdate);
      cancelAnimationFrame(reqId);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [modalOpen]);

  return (
    <>
${bodyContent}
    </>
  );
}

export default App;
`;

  // Fix some JSX issues dynamically 
  let finalTsx = AppTsx.replace(/autoplay/g, 'autoPlay');
  finalTsx = finalTsx.replace(/playsinline/g, 'playsInline');
  finalTsx = finalTsx.replace(/<video id="hero-video"/g, '<video id="hero-video" ref={videoRef}');
  finalTsx = finalTsx.replace(/<div id="how-it-works-modal" className="modal-backdrop">/g, '<div id="how-it-works-modal" className={modalOpen ? "modal-backdrop open" : "modal-backdrop"} onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>');

  // Fix remaining missing modal closes
  finalTsx = finalTsx.replace(/className="modal-close".*?>/g, 'className="modal-close" onClick={() => setModalOpen(false)}>');
  
  fs.writeFileSync('src/App.tsx', finalTsx);
  console.log('Conversion successful!');
} else {
  console.log('Body not found!');
}
