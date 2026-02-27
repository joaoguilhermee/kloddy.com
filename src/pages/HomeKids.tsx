import { Layout } from '../components/Layout';

export default function HomeKids() {
    return (
        <Layout>
            <section className="hero" style={{ textAlign: 'center', minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
                    Welcome to <span className="accent">Kloddy!</span>
                    <span style={{ marginTop: '20px', display: 'block' }}>🧸</span>
                </h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.5', margin: '0 auto 40px' }}>
                    This is a magic toy box that remembers all the <span title="Prompts" style={{ textDecoration: 'underline dotted', textUnderlineOffset: '4px', cursor: 'help' }}>fun stories</span> you create to play with <span title="AI tools" style={{ textDecoration: 'underline dotted', textUnderlineOffset: '4px', cursor: 'help' }}>your toys</span>!
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
                    <div style={{ flex: '1 1 280px', maxWidth: '300px', background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📦</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Save It!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>We put all your fun ideas in a safe toy box so you never lose them.</p>
                    </div>

                    <div style={{ flex: '1 1 280px', maxWidth: '300px', background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🕰️</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Time Travel</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>Change your mind? We have a magic button to go back to how things were!</p>
                    </div>

                    <div style={{ flex: '1 1 280px', maxWidth: '300px', background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⭐</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Get Graded!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>We check if your toy did a good job and give it a shiny gold star!</p>
                    </div>

                    <div style={{ flex: '1 1 280px', maxWidth: '300px', background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>💌</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Share Stories!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>Share your wonderful stories with your friends and play together!</p>
                    </div>

                    <div style={{ flex: '1 1 280px', maxWidth: '300px', background: 'var(--surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏰</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--ink)' }}>Safe Place!</h3>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>A super safe castle that keeps all your fun stories safe from any sneaky monsters! 👾</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
