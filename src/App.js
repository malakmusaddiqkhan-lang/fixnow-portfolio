import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>malakmusaddiqkhan</h1>
        <p style={styles.subtitle}>Full-Stack Mobile Developer | React Native & Node.js</p>
        <div style={styles.contactLinks}>
          <span>📧 malakmusaddiqkhan@gmail.com</span> | <span>www.linkedin.com/in/malak-musaddiq-b69038234</span>
        </div>
      </header>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Project</h2>
        
        <div style={styles.projectCard}>
          <div style={styles.projectInfo}>
            <h3 style={styles.projectTitle}>FixNow - On-Demand Service App</h3>
            <p>
              A professional full-stack mobile application that connects users with local 
              service providers. Features a real-time booking system and secure user authentication.
            </p>
            <div style={styles.tagContainer}>
              <span style={styles.tag}>React Native</span>
              <span style={styles.tag}>Node.js</span>
              <span style={styles.tag}>MongoDB</span>
              <span style={styles.tag}>Express</span>
            </div>
            <div style={styles.buttonGroup}>
              <button style={styles.primaryBtn}>Watch Demo</button>
              <button style={styles.secondaryBtn}>View Code</button>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 Build with ❤️ by malakmusaddiqkhan</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#333', backgroundColor: '#f4f7f6', minHeight: '100vh' },
  header: { textAlign: 'center', padding: '100px 20px', backgroundColor: '#2c3e50', color: 'white' },
  name: { fontSize: '3rem', margin: '0' },
  subtitle: { fontSize: '1.2rem', opacity: '0.9' },
  contactLinks: { marginTop: '20px', fontSize: '0.9rem' },
  section: { maxWidth: '900px', margin: '0 auto', padding: '60px 20px' },
  sectionTitle: { borderBottom: '2px solid #3498db', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' },
  projectCard: { backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', padding: '30px', display: 'flex', flexDirection: 'column' },
  projectTitle: { marginTop: '0', color: '#2c3e50' },
  tagContainer: { margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' },
  tag: { backgroundColor: '#e1f5fe', color: '#01579b', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' },
  buttonGroup: { display: 'flex', gap: '15px' },
  primaryBtn: { padding: '12px 25px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  secondaryBtn: { padding: '12px 25px', backgroundColor: 'transparent', color: '#3498db', border: '2px solid #3498db', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  footer: { textAlign: 'center', padding: '40px', fontSize: '0.8rem', color: '#7f8c8d' }
};

export default App;
