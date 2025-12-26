import { Github, Linkedin, Youtube, Facebook, Instagram, Twitter, MessageSquare, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github />, url: 'https://github.com/isurudanapinthu', label: 'GitHub' },
        { icon: <Linkedin />, url: 'https://linkedin.com/in/isurudanapinthu', label: 'LinkedIn' },
        { icon: <MessageSquare size={20} />, url: 'https://fiverr.com', label: 'Fiverr' },
        { icon: <Briefcase size={20} />, url: 'https://upwork.com', label: 'Upwork' },
        { icon: <Youtube />, url: '#', label: 'YouTube' },
        { icon: <Facebook />, url: '#', label: 'Facebook' },
        { icon: <Instagram />, url: '#', label: 'Instagram' },
        { icon: <Mail />, url: 'mailto:isuruudanapinthu@gmail.com', label: 'Email' },
    ];

    return (
        <footer style={{
            padding: '5rem 0 3rem',
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2.5rem',
                    letterSpacing: '-0.02em'
                }}>IUP.</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                }}>
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} className="social-link" title={link.label} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    ))}
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Based in Colombo, Sri Lanka</p>
                    <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Available for new DevOps projects & consulting</p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', marginBottom: '2.5rem', opacity: '0.5' }} />

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                    © {new Date().getFullYear()} <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>ISURU UDANA PINTHU</span>. ALL RIGHTS RESERVED.
                </p>
            </div>

            <style>{`
        .social-link {
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.8rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justifyContent: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
        }
        .social-link:hover {
          color: white;
          background: var(--accent-gradient);
          transform: translateY(-5px) rotate(360deg);
          border-color: transparent;
          box-shadow: var(--shadow-lg);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
