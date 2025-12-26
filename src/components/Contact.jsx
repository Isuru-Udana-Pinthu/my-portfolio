import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.contact-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="section" ref={sectionRef} style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title contact-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    <div className="contact-info contact-reveal">
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Let's discuss your project</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm always open to new opportunities, collaborations, or just a friendly chat about DevOps.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', backgroundColor: 'var(--card-bg)', padding: '0.75rem', borderRadius: '0.5rem' }}><Mail /></div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</p>
                                    <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>isuruudanapinthu@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', backgroundColor: 'var(--card-bg)', padding: '0.75rem', borderRadius: '0.5rem' }}><Phone /></div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Phone</p>
                                    <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>0705339022</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', backgroundColor: 'var(--card-bg)', padding: '0.75rem', borderRadius: '0.5rem' }}><MapPin /></div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                                    <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form contact-reveal" style={{
                        backgroundColor: 'var(--card-bg)',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input type="text" placeholder="Name" className="input-field" required />
                            <input type="email" placeholder="Email" className="input-field" required />
                        </div>
                        <input type="text" placeholder="Subject" className="input-field" required />
                        <textarea placeholder="Message" className="input-field" style={{ minHeight: '150px', resize: 'vertical' }} required></textarea>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        .input-field {
          width: 100%;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          transition: border-color 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
      `}</style>
        </section>
    );
};

export default Contact;
