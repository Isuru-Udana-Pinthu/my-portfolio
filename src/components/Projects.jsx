import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Automated Kubernetes Cluster',
        description: 'High-availability K8s cluster deployment using Terraform and Ansible with automated scaling.',
        stack: ['Terraform', 'Kubernetes', 'AWS'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        title: 'CI/CD Pipeline Framework',
        description: 'Generic, reusable Jenkins pipeline for multi-service microarchitectures with integrated security scans.',
        stack: ['Jenkins', 'Docker', 'SonarQube'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        title: 'Cloud-Native Monitoring',
        description: 'Visualizing cluster health using Prometheus and Grafana with automated alerting via Slack.',
        stack: ['Prometheus', 'Grafana', 'Helm'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
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
        <section id="projects" className="section" ref={sectionRef} style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--border-color)',
                        }}>
                            <div style={{
                                height: '200px',
                                background: project.title.includes('Kubernetes') ? 'linear-gradient(45deg, #326ce5, #3b82f6)' :
                                    project.title.includes('Pipeline') ? 'linear-gradient(45deg, #d33833, #f05032)' :
                                        'linear-gradient(45deg, #e6522c, #f7931e)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{project.title}</span>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.stack.map((tech, i) => (
                                        <span key={i} style={{
                                            padding: '0.25rem 0.75rem',
                                            backgroundColor: 'var(--bg-primary)',
                                            borderRadius: '1rem',
                                            fontSize: '0.8rem',
                                            color: 'var(--accent-primary)',
                                            border: '1px solid var(--border-color)'
                                        }}>{tech}</span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.github} className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
