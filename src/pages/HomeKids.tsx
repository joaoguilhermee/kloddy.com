import { Layout } from '../components/Layout';

export default function HomeKids() {
    return (
        <Layout>
            <section className="hero" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
                    Welcome to <span className="accent">Kloddy!</span> 🧸
                </h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.5', margin: '0 auto 40px' }}>
                    This is a magic place where we talk to computers!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📦</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Save It!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>We put all your fun ideas in a safe toy box so you never lose them.</p>
                    </div>

                    <div style={{ background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🕰️</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Time Travel</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>Change your mind? We have a magic button to go back to how things were!</p>
                    </div>

                    <div style={{ background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⭐</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Get Graded!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>We check if the computer did a good job and give it a shiny gold star!</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
