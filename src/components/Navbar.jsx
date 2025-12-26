import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark ? 'dark' : 'light';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        gsap.from('.nav-content', {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }, []);

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 0'
        }}>
            <div className="container nav-content" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <a href="#" className="logo" style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>IUP.</a>

                <div className="nav-links desktop-only" style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#certifications" className="nav-link">Certifications</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <button className="mobile-menu-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu" style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100vh - 60px)',
                    backgroundColor: 'var(--bg-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '3rem',
                    gap: '2rem',
                    zIndex: 999
                }}>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <button onClick={toggleTheme}>
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            )}

            <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent-gradient);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
