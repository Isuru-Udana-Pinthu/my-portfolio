import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, FileText, Github, Linkedin, MessageSquare, Briefcase, Mail } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Tech Nodes Animation
            const nodes = gsap.utils.toArray('.tech-node');

            // Randomly animate each node
            nodes.forEach((node) => {
                gsap.to(node, {
                    y: "random(-30, 30)",
                    x: "random(-30, 30)",
                    opacity: "random(0.2, 0.6)",
                    scale: "random(0.5, 1.2)",
                    duration: "random(3, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 5)"
                });
            });

            // Floating Content
            gsap.to('.hero-float', {
                y: -10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.1
            });

            tl.from('.hero-title', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' })
                .from('.hero-tagline', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
                .from('.hero-btns', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
                .from('.hero-socials', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Generate random nodes
    const renderNodes = () => {
        const nodes = [];
        for (let i = 0; i < 20; i++) {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 10 + 4}px`,
                backgroundColor: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                opacity: Math.random() * 0.3 + 0.1,
                borderRadius: i % 3 === 0 ? '50%' : '2px', // Mix of circles and squares
                position: 'absolute',
                filter: 'blur(1px)'
            };
            nodes.push(<div key={i} className="tech-node" style={style}></div>);
        }
        return nodes;
    };

    return (
        <section className="hero section" ref={heroRef} style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-primary)'
        }}>
            {/* Live Background Container */}
            <div className="nodes-container" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                {/* Large Gradient Blobs for Ambient Color */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}></div>

                {/* Animated Particles */}
                {renderNodes()}
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="hero-title hero-float" style={{
                    fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                    fontWeight: '900',
                    lineHeight: '1',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)'
                }}>
                    Isuru <span className="text-gradient">Udana Pinthu</span>
                </h1>
                <p className="hero-tagline hero-float" style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                    margin: '0 auto 2.5rem',
                    fontWeight: '400',
                    letterSpacing: '0.01em'
                }}>
                    2nd Year Undergraduate Student & Aspiring DevOps Engineer. <br />
                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Passionate about SRE, Cloud Automation & Infrastructure Lore</span>
                </p>

                <div className="hero-btns hero-float" style={{
                    display: 'flex',
                    gap: '1.2rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '3.5rem'
                }}>
                    <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                        View Projects <ExternalLink size={18} />
                    </a>
                    <a href="/resume.pdf" download className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
                        Download Resume <FileText size={18} />
                    </a>
                </div>

                <div className="hero-socials hero-float" style={{
                    display: 'flex',
                    gap: '1.8rem',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    color: 'var(--text-secondary)'
                }}>
                    <a href="https://github.com/isurudanapinthu" title="GitHub" className="social-icon" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                    <a href="https://linkedin.com/in/isurudanapinthu" title="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                    <a href="https://www.fiverr.com/isurudanapinthu" title="Fiverr" className="social-icon" target="_blank" rel="noopener noreferrer"><MessageSquare size={24} /></a>
                    <a href="https://www.upwork.com/freelancers/~your-id" title="Upwork" className="social-icon" target="_blank" rel="noopener noreferrer"><Briefcase size={24} /></a>
                    <a href="mailto:isuruudanapinthu@gmail.com" title="Email" className="social-icon"><Mail size={24} /></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
