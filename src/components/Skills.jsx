import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const allSkills = [
        { name: 'Kubernetes', path: '/icons_v2/Kubernetes.png' },
        { name: 'Docker', path: '/icons_v2/Docker.png' },
        { name: 'Terraform', path: '/icons_v2/HashiCorp Terraform.png' },
        { name: 'AWS', path: '/icons_v2/AWS.png' },
        { name: 'Google Cloud', path: '/icons_v2/Google Cloud.png' },
        { name: 'Azure', path: '/icons_v2/Azure.png' },
        { name: 'Jenkins', path: '/icons_v2/Jenkins.png' },
        { name: 'Ansible', path: '/icons_v2/Ansible.png' },
        { name: 'GitHub Actions', path: '/icons_v2/GitHub Actions.png' },
        { name: 'Argo CD', path: '/icons_v2/Argo CD.png' },
        { name: 'Linux', path: '/icons_v2/Linux.png' },
        { name: 'Grafana', path: '/icons_v2/Grafana.png' },
        { name: 'NGINX', path: '/icons_v2/NGINX.png' },
        { name: 'Python', path: '/icons_v2/Python.png' },
        { name: 'Go', path: '/icons_v2/Go.png' },
        { name: 'Java', path: '/icons_v2/Java.png' },
        { name: 'JavaScript', path: '/icons_v2/JavaScript.png' },
        { name: 'TypeScript', path: '/icons_v2/TypeScript.png' },
        { name: 'React', path: '/icons_v2/React.png' },
        { name: 'Next.js', path: '/icons_v2/Next.js.png' },
        { name: 'Node.js', path: '/icons_v2/Node.js.png' },
        { name: 'Express', path: '/icons_v2/Express.png' },
        { name: 'Django', path: '/icons_v2/Django.png' },
        { name: 'MongoDB', path: '/icons_v2/MongoDB.png' },
        { name: 'MySQL', path: '/icons_v2/MySQL.png' },
        { name: 'Git', path: '/icons_v2/Git.png' },
        { name: 'GitHub', path: '/icons_v2/GitHub.png' },
        { name: 'HTML5', path: '/icons_v2/HTML5.png' },
        { name: 'CSS3', path: '/icons_v2/CSS3.png' },
        { name: 'Tailwind', path: '/icons_v2/Tailwind CSS.png' },
        { name: 'Postman', path: '/icons_v2/Postman.png' },
        { name: 'PowerShell', path: '/icons_v2/Powershell.png' },
        { name: 'Spring', path: '/icons_v2/Spring.png' },
        { name: 'Maven', path: '/icons_v2/Apache Maven.png' },
        { name: 'Gradle', path: '/icons_v2/Gradle.png' },
        { name: 'Vite', path: '/icons_v2/Vite.js.png' },
        { name: 'Angular', path: '/icons_v2/Angular.png' },
        { name: 'Bootstrap', path: '/icons_v2/Bootstrap.png' },
        { name: 'TensorFlow', path: '/icons_v2/TensorFlow.png' },
        { name: 'Keras', path: '/icons_v2/Keras.png' },
        { name: 'scikit-learn', path: '/icons_v2/scikit-learn.png' },
        { name: 'Jupyter', path: '/icons_v2/Jupyter.png' },
        { name: 'Kafka', path: '/icons_v2/Apache Kafka.png' },
        { name: 'Tomcat', path: '/icons_v2/Apache Tomcat.png' },
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.tech-icon-wrapper', {
                opacity: 0,
                scale: 0.5,
                duration: 0.8,
                stagger: {
                    each: 0.02,
                    grid: "auto",
                    from: "start"
                },
                ease: 'back.out(1.7)'
            });

            // Gentle live drifting
            gsap.utils.toArray('.tech-icon-wrapper').forEach((item) => {
                gsap.to(item, {
                    x: `+=${Math.random() * 10 - 5}`,
                    y: `+=${Math.random() * 10 - 5}`,
                    duration: 3 + Math.random() * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="section" ref={sectionRef} style={{
            padding: '6rem 0',
            backgroundColor: 'var(--bg-primary)',
        }}>
            <div className="container">
                <h2 className="section-title" style={{
                    textAlign: 'center',
                    marginBottom: '4rem',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '700'
                }}>Technical Arsenal Lore</h2>

                <div
                    className="skills-flex-container"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.2rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {allSkills.map((skill, i) => (
                        <div
                            key={skill.name + i}
                            className="tech-icon-wrapper"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div className="icon-container" style={{
                                width: '75px', // Uniform size for all icons
                                height: '75px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '1.1rem',
                                padding: '1rem',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <img
                                    src={skill.path}
                                    alt={skill.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                    title={skill.name}
                                    onError={(e) => {
                                        // Fallback if icon fails to load
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += `<span style="font-size: 0.7rem; color: var(--text-secondary); text-align: center;">${skill.name}</span>`;
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .icon-container:hover {
                    transform: scale(1.3) translateY(-8px) !important;
                    background-color: var(--bg-secondary) !important;
                    border-color: var(--accent-primary) !important;
                    box-shadow: var(--shadow-md) !important;
                    z-index: 20;
                }
                @media (max-width: 768px) {
                    .skills-flex-container {
                        gap: 0.8rem;
                    }
                    .icon-container {
                        width: 60px !important;
                        height: 60px !important;
                        padding: 0.7rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
