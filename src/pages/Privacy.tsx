import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';

export const Privacy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <section className="legal-section">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'left', margin: '140px auto 80px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: "'Rajdhani', sans-serif" }}>
                        Privacy <span className="accent">Policy</span>
                    </h1>
                    <p style={{ color: 'var(--ink-muted)', marginBottom: '40px' }}>
                        <strong>Effective Date:</strong> February 27, 2026
                    </p>

                    <div style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '32px' }}>
                            Kloddy is committed to protecting the privacy and security of the information managed within our platform. This policy describes how we handle the data generated during your AI workflows.
                        </p>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            1. Information We Collect
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>User Data</strong>: We collect email addresses and profile information to facilitate account management and organization invitations.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Prompt Assets</strong>: We store your prompts, features, and version history to ensure your work is always retrievable and restorable.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Execution Metadata</strong>: We collect data on token counts, latency (execution time), and cost to provide you with performance and financial visibility.</li>
                            <li><strong>Observability Logs</strong>: For debugging purposes, we record RAW JSON payloads and variable substitutions during prompt execution.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            2. How We Use Your Data
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Service Delivery</strong>: To execute prompts, run side-by-side comparisons, and generate evaluation scores.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Governance</strong>: To maintain a comprehensive audit trail showing "who changed what and when" for your internal accountability.</li>
                            <li><strong>Security</strong>: To separate data between different organizations and ensure that published versions remain immutable and safe from accidental deletion.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            3. Data Sharing and Third Parties
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Model Providers</strong>: When you run a prompt, your input data is sent to the specific AI model provider (e.g., OpenAI, Google, Anthropic) you have selected.</li>
                            <li><strong>No Sale of Data</strong>: Kloddy does not sell your private prompts, criteria, or execution logs to third parties.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            4. Your Control
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Member Access</strong>: Organization owners have full authority to add or remove members and control data visibility within their workspace.</li>
                            <li><strong>Data Retrieval</strong>: Your assets are organized and preserved in a way that makes them always accessible to your authorized team members.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
