import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award, ShieldCheck, GraduationCap, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        title: "Multicloud Network Associate",
        issuer: "Aviatrix",
        date: "2024",
        // Using an image for the logo since user provided it
        image: "/aviatrix.png",
        link: "#",
        color: "#FF4500", // Aviatrix orange-red
        isImage: true
    }
];

const Certifications = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.cert-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="certifications" className="section" ref={sectionRef} style={{ py: '6rem' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Licenses & Certifications</h2>

                <div className="cert-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card" style={{
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '1.25rem',
                            padding: '2rem',
                            border: '1px solid var(--border-color)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '1rem',
                                backgroundColor: cert.isImage ? 'transparent' : `${cert.color}15`,
                                color: cert.color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: cert.isImage ? 'none' : `1px solid ${cert.color}30`
                            }}>
                                {cert.isImage ? (
                                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                ) : (
                                    cert.icon
                                )}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    {cert.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                                    {cert.issuer}
                                </p>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', opacity: 0.8 }}>
                                    {cert.date}
                                </span>
                            </div>

                            <a
                                href={cert.link}
                                className="view-cert-btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    marginTop: 'auto',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                View Certificate <ExternalLink size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .cert-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--accent-primary);
                    box-shadow: var(--shadow-lg);
                }
                .view-cert-btn:hover {
                    color: var(--accent-primary) !important;
                }
            `}</style>
        </section>
    );
};

export default Certifications;
