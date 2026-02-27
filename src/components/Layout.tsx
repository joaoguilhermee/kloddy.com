import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <nav>
                <Link to="/" className="logo">
                    <img src="/kloddy-dark.png" alt="Kloddy" />
                    Kloddy
                </Link>
                <ul className="nav-links">
                    <li><Link to="/#features">Features</Link></li>
                    <li><Link to="/#eval">Evaluation</Link></li>
                    <li><Link to="/#bench">Benchmarking</Link></li>
                    <li><Link to="/#governance">Governance</Link></li>
                </ul>
                <div className="nav-cta">
                    <a href="https://app.kloddy.com" className="btn-primary">Get started free</a>
                </div>
            </nav>

            {children}

            <footer>
                <span className="footer-copy">© 2026 Kloddy. Master your AI, no matter who you are.</span>
                <div className="footer-links">
                    <a href="#">Docs</a>
                    <a href="#">Changelog</a>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </footer>
        </>
    );
};
