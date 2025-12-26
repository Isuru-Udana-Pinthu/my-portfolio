import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: '2nd Year Undergraduate (BSc in IT/CS)',
        company: 'Leading University in Sri Lanka',
        period: '2023 - Present',
        desc: 'Focusing on Computer Systems, Data Structures, and beginning the journey into SRE/DevOps lore.'
    },
    {
        role: 'Open Source Contributor',
        company: 'GitHub Community',
        period: '2024 - Active',
        desc: 'Actively contributing to automation scripts and exploring cloud-native tools via open-source projects.'
    },
    {
        role: 'Self-Directed Learner (SRE/DevOps)',
        company: 'Cloud Native Computing Foundation (CNCF)',
        period: 'Ongoing',
        desc: 'Mastering the foundations of Kubernetes, Docker, and CI/CD pipelines through hands-on labs and certifications.'
    }
];

const Experience = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.timeline-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Academic & Learning Journey</h2>

                <div className="timeline" style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '0 auto',
                    paddingLeft: '2rem',
                    borderLeft: '2px solid var(--border-color)'
                }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" style={{
                            position: 'relative',
                            marginBottom: '3rem'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0',
                                width: '1rem',
                                height: '1rem',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-primary)',
                                border: '4px solid var(--bg-primary)'
                            }}></div>

                            <div style={{
                                padding: '1.5rem',
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <span style={{
                                    color: 'var(--accent-primary)',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>{exp.period}</span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company}</h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
