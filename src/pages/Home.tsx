import { useState, useEffect, useRef } from 'react';
import '../index.css';

import { Layout } from '../components/Layout';

function Home() {
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
    <Layout>


      {/*  HERO  */}
      <section className="hero">
        <div className="hero-video-container" aria-hidden="true" tabIndex={-1}>
          <video id="hero-video" ref={videoRef} className="hero-video" poster="fallback.png" autoPlay muted playsInline>
            <source src="background.mov" type="video/quicktime" />
            <source src="background.mov" type="video/mp4" />
            {/*  Fallback message for older browsers  */}
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-darken"></div>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
        <div className="hero-badge"><span className="badge-dot"></span>The professional standard for AI mastery</div>
        <h1>Master your AI.<br /><span className="accent">Amplify your brilliance.</span></h1>
        <p className="hero-sub">Stop guessing and start guaranteeing. Kloddy gives forward-thinking builders the structure,
          safety, and
          clarity to turn random chats into reliable, high-quality results.</p>
        <div className="hero-actions">
          <a href="https://app.kloddy.com" className="btn-primary btn-lg">Create your first organization →</a>
        </div>

        <div className="hero-image-wrap">
          <img src="evaluation.png" alt="Kloddy Evaluation UI" className="hero-evaluation-img" />
        </div>
      </section>

      {/*  FEATURES  */}
      <section className="features" id="features">
        <div className="container">
          <div className="features-intro">
            <div>
              <div className="section-label reveal">Prompt asset management</div>
              <h2 className="section-title reveal">Never lose a<br />great <span className="accent">prompt</span> again</h2>
            </div>
            <p className="section-desc reveal" style={{ "marginTop": "0" }}>Move away from messy chat histories and lost notes. Kloddy
              treats your ideas as valuable assets that grow and improve over time.</p>
          </div>
        </div>
        <div className="container" style={{ "maxWidth": "100%", "padding": "0" }}>
          <div className="features-grid">
            <div className="feat reveal"><span className="feat-num">01</span>
              <div className="feat-icon">🗂️</div>
              <div className="feat-title">Organized Workspaces</div>
              <div className="feat-text">Group your prompts into clear "Features" within different "Organizations" so you can
                find exactly what you need in seconds.</div>
              <div className="chips"><span className="chip chip-o">Organizations</span><span className="chip">Features</span><span
                className="chip">Prompts</span></div>
            </div>
            <div className="feat reveal d1"><span className="feat-num">02</span>
              <div className="feat-icon">🔖</div>
              <div className="feat-title">Full Version History</div>
              <div className="feat-text">Every change you make is saved with a note on what was updated — in an immutable,
                always-accessible history.</div>
              <div className="chips"><span className="chip chip-o">Immutable log</span><span className="chip">Changelogs</span></div>
            </div>
            <div className="feat reveal d2"><span className="feat-num">03</span>
              <div className="feat-icon">↩️</div>
              <div className="feat-title">Instant Rollback</div>
              <div className="feat-text">If a new change doesn't work out, restore a previous version with a single click. No
                stress, no data loss.</div>
              <div className="chips"><span className="chip chip-g">One-click restore</span><span className="chip">Safe edits</span>
              </div>
            </div>
            <div className="feat reveal"><span className="feat-num">04</span>
              <div className="feat-icon">⚡</div>
              <div className="feat-title">Side-by-Side Diffs</div>
              <div className="feat-text">Easily see the exact text changes between any two versions of your work — character by
                character clarity.</div>
              <div className="chips"><span className="chip">v2 vs v3</span><span className="chip chip-o">Char-level diff</span></div>
            </div>
            <div className="feat reveal d1"><span className="feat-num">05</span>
              <div className="feat-icon">🧩</div>
              <div className="feat-title">Dynamic Templates</div>
              <div className="feat-text">Use {`{{variable}}`} syntax to build flexible prompts that handle different inputs without
                rewriting core instructions.</div>
              <div className="chips"><span className="chip chip-g">Variables</span><span className="chip">Reusable</span><span
                className="chip">Flexible</span></div>
            </div>
            <div className="feat reveal d2"><span className="feat-num">06</span>
              <div className="feat-icon">🔍</div>
              <div className="feat-title">Always Retrievable</div>
              <div className="feat-text">Your best prompts never get buried in a chat window again. Every asset is searchable,
                organized, and owned by your team.</div>
              <div className="chips"><span className="chip chip-a">Search</span><span className="chip">Owned assets</span></div>
            </div>
          </div>
        </div>
      </section>

      {/*  EVAL  */}
      <section className="eval-section" id="eval">
        <div className="container">
          <div className="section-label reveal">The judge in your corner</div>
          <h2 className="section-title reveal">Why settle for<br /><span className="accent">"good enough"?</span></h2>
          <p className="section-desc reveal">Kloddy uses advanced AI to evaluate your results based on your personal rules.
            Define what success looks like — then verify it automatically.</p>

          <div className="eval-layout">
            <div className="reveal">
              <div className="eval-card">
                <div className="eval-card-header">
                  <div className="eval-card-title">🧑‍⚖️ Evaluation Report</div>
                  <span className="model-tag">claude-sonnet-4</span>
                </div>
                <div className="eval-body">
                  <div
                    style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "10px", "color": "var(--ink-dim)", "letterSpacing": "0.08em", "textTransform": "uppercase", "marginBottom": "18px" }}>
                    Scoring Pillars</div>
                  <div className="score-row"><span className="score-lbl">Accuracy</span>
                    <div className="score-right">
                      <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ "width": "94%" }}></div>
                      </div><span className="score-num">94</span>
                    </div>
                  </div>
                  <div className="score-row"><span className="score-lbl">Completeness</span>
                    <div className="score-right">
                      <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ "width": "88%" }}></div>
                      </div><span className="score-num">88</span>
                    </div>
                  </div>
                  <div className="score-row"><span className="score-lbl">Formatting</span>
                    <div className="score-right">
                      <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ "width": "97%" }}></div>
                      </div><span className="score-num">97</span>
                    </div>
                  </div>
                  <div className="score-row"><span className="score-lbl">Safety</span>
                    <div className="score-right">
                      <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ "width": "100%" }}></div>
                      </div><span className="score-num">100</span>
                    </div>
                  </div>
                  <div style={{ "borderTop": "1px solid var(--border)", "marginTop": "18px", "paddingTop": "16px" }}>
                    <div
                      style={{ "fontSize": "11px", "color": "var(--ink-muted)", "fontFamily": "'DM Mono',monospace", "marginBottom": "10px", "letterSpacing": "0.04em", "textTransform": "uppercase" }}>
                      Critical Failure Conditions</div>
                    <div style={{ "fontSize": "13px", "color": "var(--ink-muted)", "lineHeight": "2" }}>
                      <span style={{ "color": "var(--green)", "marginRight": "8px" }}>✓</span> No hallucinated facts detected<br />
                      <span style={{ "color": "var(--green)", "marginRight": "8px" }}>✓</span> Response meets length constraint<br />
                      <span style={{ "color": "var(--green)", "marginRight": "8px" }}>✓</span> Tone matches acceptance criteria
                    </div>
                  </div>
                  <div className="pass-badge"><span className="pass-dot"></span>PASS — All criteria met · threshold 88</div>
                  <div className="cost-cards">
                    <div className="cost-card">
                      <div className="cost-lbl">Cost</div>
                      <div className="cost-val">$0.0031</div>
                      <div className="cost-unit">per run</div>
                    </div>
                    <div className="cost-card">
                      <div className="cost-lbl">Latency</div>
                      <div className="cost-val">1.4s</div>
                      <div className="cost-unit">execution</div>
                    </div>
                    <div className="cost-card">
                      <div className="cost-lbl">Tokens</div>
                      <div className="cost-val">2.1k</div>
                      <div className="cost-unit">total used</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal d1">
              <div
                style={{ "fontFamily": "'Rajdhani',sans-serif", "fontSize": "20px", "fontWeight": "700", "textTransform": "uppercase", "letterSpacing": "0.04em", "marginBottom": "10px" }}>
                Detailed reasoning</div>
              <div style={{ "fontSize": "15px", "color": "var(--ink-muted)", "lineHeight": "1.65", "marginBottom": "20px" }}>Don't just get a score
                —
                see a step-by-step logic breakdown of why the AI succeeded or failed.</div>
              <div className="diff-card">
                <div className="diff-header"><span>📄</span> email-assistant · v3 → v4</div>
                <div className="diff-line rem"><span className="diff-g minus">-</span><span className="diff-txt">Write a professional
                  email responding to</span></div>
                <div className="diff-line rem"><span className="diff-g minus">-</span><span className="diff-txt">the customer. Keep it
                  concise.</span></div>
                <div className="diff-line add"><span className="diff-g plus">+</span><span className="diff-txt">Write a warm but
                  professional email in</span></div>
                <div className="diff-line add"><span className="diff-g plus">+</span><span className="diff-txt">under {`{{max_words}}`}
                  words. Match the</span></div>
                <div className="diff-line add"><span className="diff-g plus">+</span><span className="diff-txt">customer's tone. Never
                  use jargon.</span></div>
                <div style={{ "height": "8px" }}></div>
                <div className="diff-line"><span className="diff-g"> </span><span className="diff-txt"
                  style={{ "color": "var(--ink-muted)" }}>Context: {`{{context}}`}</span></div>
                <div className="diff-line rem"><span className="diff-g minus">-</span><span className="diff-txt">Input: {`{{email}}`}</span>
                </div>
                <div className="diff-line add"><span className="diff-g plus">+</span><span className="diff-txt">Customer email:
                  {`{{email}}`}</span></div>
                <div className="diff-line add"><span className="diff-g plus">+</span><span className="diff-txt">Previous exchanges:
                  {`{{history}}`}</span></div>
              </div>
              <div className="var-block">
                <div
                  style={{ "color": "var(--ink-dim)", "fontSize": "10px", "letterSpacing": "0.06em", "textTransform": "uppercase", "marginBottom": "8px" }}>
              // defined variables</div>
                <div><span style={{ "color": "var(--blue)" }}>max_words</span> = <span style={{ "color": "var(--amber)" }}>"150"</span></div>
                <div><span style={{ "color": "var(--blue)" }}>context</span> = <span style={{ "color": "var(--amber)" }}>"billing
                  dispute"</span></div>
                <div><span style={{ "color": "var(--blue)" }}>email</span> = <span style={{ "color": "var(--amber)" }}>"I've been charged
                  twice..."</span></div>
                <div><span style={{ "color": "var(--blue)" }}>history</span> = <span style={{ "color": "var(--amber)" }}>"[last 3
                  messages]"</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  BENCHMARKING  */}
      <section className="bench-section" id="bench">
        <div className="container">
          <div className="section-label reveal">Model benchmarking</div>
          <h2 className="section-title reveal">Which model gives you<br /><span className="accent">the perfect answer?</span></h2>
          <p className="section-desc reveal">Run your prompt through GPT-4o, Claude, or Gemini simultaneously. Automated
            verdicts — "No Clear Winner", "Tie", or a decisive champion — based on your criteria.</p>
          <div className="bench-table reveal">
            <div className="bench-thead">
              <div>Prompt / Version</div>
              <div>Accuracy</div>
              <div>Completeness</div>
              <div>Cost/run</div>
              <div>Verdict</div>
            </div>
            <div className="bench-row">
              <div className="bench-name">email-assistant v4<small>claude-sonnet-4 · 2.1k tokens</small></div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "94%" }}></div>
                </div><span>94</span>
              </div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "91%" }}></div>
                </div><span>91</span>
              </div>
              <div style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "12px", "color": "var(--ink-muted)" }}>$0.0023</div>
              <div><span className="verdict v-win">Winner</span></div>
            </div>
            <div className="bench-row">
              <div className="bench-name">email-assistant v4<small>gpt-4o · 2.3k tokens</small></div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "89%" }}></div>
                </div><span>89</span>
              </div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "87%" }}></div>
                </div><span>87</span>
              </div>
              <div style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "12px", "color": "var(--ink-muted)" }}>$0.0041</div>
              <div><span className="verdict v-none">Challenger</span></div>
            </div>
            <div className="bench-row">
              <div className="bench-name">code-review v2 vs v3<small>claude-sonnet-4 · version compare</small></div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "82%" }}></div>
                </div><span>82</span>
              </div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "88%" }}></div>
                </div><span>88</span>
              </div>
              <div style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "12px", "color": "var(--ink-muted)" }}>$0.0018</div>
              <div><span className="verdict v-tie">Tie</span></div>
            </div>
            <div className="bench-row">
              <div className="bench-name">summarization v5<small>gemini-1.5-pro · 3.4k tokens</small></div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "91%" }}></div>
                </div><span>91</span>
              </div>
              <div className="bench-score">
                <div className="mini-bar">
                  <div className="mini-fill" style={{ "width": "93%" }}></div>
                </div><span>93</span>
              </div>
              <div style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "12px", "color": "var(--ink-muted)" }}>$0.0031</div>
              <div><span className="verdict v-win">Winner</span></div>
            </div>
          </div>
        </div>
      </section>

      {/*  GOVERNANCE  */}
      <section className="audit-section" id="governance">
        <div className="container">
          <div className="section-label reveal">Transparency &amp; total control</div>
          <h2 className="section-title reveal">A behind-the-scenes<br /><span className="accent">look at your AI</span></h2>
          <p className="section-desc reveal">Everything safe, traceable, and cost-effective. Invite others, manage roles, and
            track who changed what — and when.</p>
          <div className="audit-feed reveal">
            <div className="audit-feed-header">
              <div className="audit-feed-title">Audit Log</div>
              <div className="audit-tabs">
                <div className="audit-tab active">All events</div>
                <div className="audit-tab">Publishes</div>
                <div className="audit-tab">Members</div>
              </div>
              <div style={{ "fontFamily": "'DM Mono',monospace", "fontSize": "10px", "color": "var(--ink-dim)" }}>Last 7 days · 42 events</div>
            </div>
            <div className="audit-item">
              <div className="audit-dot pub"></div>
              <div className="audit-content">
                <div className="audit-action">Published <b>email-assistant</b> v4 — <b>"Improved tone, added length
                  constraint"</b></div>
                <div className="audit-meta"><span className="audit-time">2 min ago</span><span
                  className="audit-user">sarah@acme.com</span><a className="audit-diff">View diff →</a></div>
              </div>
            </div>
            <div className="audit-item">
              <div className="audit-dot draft"></div>
              <div className="audit-content">
                <div className="audit-action">Ran evaluation on <b>code-review</b> v2 · Judge: <b>gpt-4o</b> · Result: PASS
                  (91/100)</div>
                <div className="audit-meta"><span className="audit-time">18 min ago</span><span
                  className="audit-user">marcus@acme.com</span><a className="audit-diff">View report →</a></div>
              </div>
            </div>
            <div className="audit-item">
              <div className="audit-dot draft"></div>
              <div className="audit-content">
                <div className="audit-action">Saved draft <b>customer-support</b> v6 with 3 variable changes</div>
                <div className="audit-meta"><span className="audit-time">1 hr ago</span><span
                  className="audit-user">priya@acme.com</span><a className="audit-diff">View diff →</a></div>
              </div>
            </div>
            <div className="audit-item">
              <div className="audit-dot mem"></div>
              <div className="audit-content">
                <div className="audit-action">Invited <b>alex@acme.com</b> to <b>Acme Corp</b> as Editor</div>
                <div className="audit-meta"><span className="audit-time">3 hr ago</span><span
                  className="audit-user">admin@acme.com</span></div>
              </div>
            </div>
            <div className="audit-item">
              <div className="audit-dot draft"></div>
              <div className="audit-content">
                <div className="audit-action">Rolled back <b>summarization</b> from v5 → v3 after regression detected</div>
                <div className="audit-meta"><span className="audit-time">Yesterday</span><span
                  className="audit-user">marcus@acme.com</span><a className="audit-diff">View diff →</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA  */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <div className="cta-card reveal">
            <div className="cta-eyebrow">Transform trial and error into consistent success</div>
            <h2 className="cta-title">Stop hoping.<br /><span className="accent">Start building.</span></h2>
            <p className="cta-sub">We turn informal experiments into structured assets. Stop hoping for a better result — start
              building one.</p>
            <div className="cta-btns">
              <a href="https://app.kloddy.com" className="btn-primary btn-lg">Create your first organization →</a>
              <a href="#" onClick={() => setModalOpen(true)} className="btn-ghost btn-lg">See how it works</a>
            </div>
            <div className="cta-fine">No credit card required · Works for individuals &amp; teams · Free to start</div>
          </div>
        </div>
      </section>





      {/*  HOW IT WORKS MODAL  */}
      <div id="how-it-works-modal" className={modalOpen ? "modal-backdrop open" : "modal-backdrop"} onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>

          <div className="modal-header">How Kloddy Empowers Your AI Journey</div>
          <div className="modal-sub">Welcome to your command center for AI excellence. Kloddy is designed to take the guesswork
            out of your interactions, giving you total command over every result. Here is how we turn your vision into
            consistent, high-quality success:</div>

          <div className="modal-divider"></div>

          <div className="modal-section">
            <h3><span className="num">1.</span> Your Vision, Always Within Reach</h3>
            <p>Stop digging through endless chat windows to find that one perfect result. Kloddy transforms your fleeting ideas into a permanent, personal library that grows with you.</p>
            <ul>
              <li><strong>Instant Recall:</strong> Your prompts are preserved exactly as you intended, organized into workspaces that make sense for your workflow.</li>
              <li><strong>Complete Continuity:</strong> Every version is saved, ensuring you can pick up exactly where you left off, months or even years later.</li>
              <li><strong>Unshakeable Ownership:</strong> You aren't just using AI; you are building a private collection of high-performing assets that belong solely to you.</li>
            </ul>
          </div>

          <div className="modal-section">
            <h3><span className="num">2.</span> Craft with Precision</h3>
            <p>Use our advanced editor to build your prompts.</p>
            <ul>
              <li><strong>Dynamic Variables:</strong> Use <code>{`{{variable}}`}</code> to create one prompt that handles many
                different situations.</li>
              <li><strong>Version Control:</strong> Every save creates an immutable version. You can experiment freely,
                knowing you can <strong>restore</strong> any previous version with a single click.</li>
            </ul>
          </div>

          <div className="modal-section">
            <h3><span className="num">3.</span> Bring in the "Judge"</h3>
            <p>Don't settle for "maybe." Define exactly what a perfect answer looks like by setting <strong>Acceptance
              Criteria</strong> and <strong>Critical Failure Conditions</strong>.</p>
            <ul>
              <li><strong>LLM-as-a-Judge:</strong> A high-level AI model will review the output against your specific rules.
              </li>
              <li><strong>Scoring:</strong> Get instant, objective grades on Accuracy, Completeness, Formatting, and Safety.
              </li>
            </ul>
          </div>

          <div className="modal-section">
            <h3><span className="num">4.</span> Compare and Conquer</h3>
            <p>Unsure which AI model is best for your task? Use <strong>Compare Models</strong> to run your prompt through
              the world’s leading "brains" (GPT-4o, Claude, Gemini) side-by-side.</p>
            <ul>
              <li><strong>Side-by-Side Diffs:</strong> See exactly how text changes between versions.</li>
              <li><strong>Automated Verdicts:</strong> Let the system crown a winner based on your data, not a guess.</li>
            </ul>
          </div>

          <div className="modal-section">
            <h3><span className="num">5.</span> Monitor and Grow</h3>
            <p>Every execution provides deep insights.</p>
            <ul>
              <li><strong>Observability:</strong> Check the <strong>RAW Debug</strong> info to see the pure data behind the
                response.</li>
              <li><strong>Efficiency:</strong> Track the exact <strong>cost</strong> in cents and <strong>latency</strong>
                in milliseconds for every prompt.</li>
              <li><strong>Audit Trail:</strong> See a complete history of every change made by you or your team for total
                accountability.</li>
            </ul>
          </div>

          <div className="modal-divider"></div>

          <div className="modal-footer-cta">
            <strong>You provide the vision; Kloddy provides the mastery.</strong>
            <a href="#" className="btn-primary btn-lg" onClick={() => setModalOpen(true)}>Start Building Now →</a>
          </div>
        </div>
      </div>



    </Layout>
  );
}

export default Home;
