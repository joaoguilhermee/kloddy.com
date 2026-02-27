import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';

export const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <section className="legal-section">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'left', margin: '140px auto 80px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: "'Rajdhani', sans-serif" }}>
                        Terms of <span className="accent">Use</span>
                    </h1>
                    <p style={{ color: 'var(--ink-muted)', marginBottom: '40px' }}>
                        <strong>Effective Date:</strong> February 27, 2026
                    </p>

                    <div style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '32px' }}>
                            Welcome to <strong>Kloddy</strong>. By accessing or using our platform, you agree to be bound by these Terms of Use. Kloddy provides a professional infrastructure for prompt engineering, model evaluation, and AI governance. Our tools are designed for all users—including executives, educators, parents, and developers—to transform AI interactions into a manageable and measurable system.
                        </p>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            1. Account and Organization Management
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Multi-Tenancy</strong>: The system supports multiple organizations within a single environment, allowing you to separate teams, clients, or products while maintaining centralized control.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Member Responsibility</strong>: As an Organization Owner, you are responsible for inviting members and managing their access levels.</li>
                            <li><strong>Auditability</strong>: You acknowledge that every structural change, prompt edit, and team action is recorded in a detailed audit log for full traceability.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            2. Prompt Engineering and Execution
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Version Control</strong>: Every change to a prompt is recorded in an immutable version history, ensuring that your work is always stable and restorable.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Execution Models</strong>: Kloddy facilitates access to various AI models (e.g., GPT-4o, Claude, Gemini). You agree to comply with the terms of service of the third-party providers you select.</li>
                            <li><strong>Variables</strong>: You are responsible for the content and security of data passed into dynamic variables (<code>{`{{variable}}`}</code>) during execution.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            3. Evaluation and Quality Control
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>LLM-as-a-Judge</strong>: While Kloddy provides a framework to score outputs based on your criteria (Accuracy, Completeness, etc.), these scores are data-driven assessments and do not constitute a legal guarantee of AI performance.</li>
                            <li><strong>User-Defined Criteria</strong>: You are responsible for defining the acceptance thresholds and failure conditions used to evaluate your prompts.</li>
                        </ul>

                        <h3 style={{ color: 'var(--ink)', fontSize: '24px', fontFamily: "'Rajdhani', sans-serif", marginBottom: '16px', marginTop: '40px' }}>
                            4. Costs and Billing
                        </h3>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Transparency</strong>: Kloddy provides real-time visibility into cost per execution and historical spending.</li>
                            <li><strong>Obligation</strong>: You are responsible for all costs incurred by your Organization based on the execution volume and the models selected.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
