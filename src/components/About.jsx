import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const blobRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // reveal text and image
            gsap.from('.about-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Unique Blob Animation
            gsap.to(blobRef.current, {
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "none",
                attr: {
                    d: "M45,-76.3C57.4,-69.3,65.8,-53.9,73.1,-38.3C80.4,-22.7,86.6,-7,84.9,7.8C83.2,22.6,73.5,36.5,63.1,48.2C52.7,59.9,41.5,69.5,28.6,74.5C15.7,79.5,1,79.9,-14.2,77.3C-29.4,74.7,-45.1,69.1,-57.4,58.8C-69.7,48.5,-78.6,33.5,-81.7,17.7C-84.8,1.9,-82.1,-14.7,-74,-28.9C-65.9,-43.1,-52.4,-54.9,-38.6,-61.4C-24.8,-67.9,-10.7,-69.1,4.3,-76.6C19.3,-84.1,38.6,-83.4,45,-76.3Z"
                }
            });

            // Subtle tilt effect on image
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = imageRef.current.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                gsap.to(imageRef.current, {
                    rotationY: x * 20,
                    rotationX: -y * 20,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(imageRef.current, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            const imgWrapper = imageRef.current;
            imgWrapper.addEventListener('mousemove', handleMouseMove);
            imgWrapper.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                imgWrapper.removeEventListener('mousemove', handleMouseMove);
                imgWrapper.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="section" ref={sectionRef} style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative' }}>
                <h2 className="about-reveal section-title" style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>About Me</h2>

                <div className="about-content" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="about-image-container about-reveal" style={{
                        position: 'relative',
                        maxWidth: '450px',
                        margin: '0 auto',
                        perspective: '1000px'
                    }}>
                        {/* Animated SVG Blob Background */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            zIndex: 0,
                            opacity: 0.6
                        }}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="url(#blob-gradient)" ref={blobRef} d="M41.5,-73.2C53.7,-66.4,63.5,-55.1,70.9,-42.2C78.3,-29.3,83.3,-14.6,83.6,0.2C83.9,15,79.5,29.9,71.4,42.5C63.3,55.1,51.5,65.3,37.9,71.4C24.3,77.5,8.9,79.5,-6.1,76.5C-21.1,73.5,-35.6,65.5,-48.2,55.3C-60.8,45.1,-71.5,32.7,-77.3,18.5C-83.1,4.3,-84,-11.7,-78.7,-25.6C-73.4,-39.5,-61.9,-51.3,-48.7,-57.8C-35.5,-64.3,-20.6,-65.5,-6.2,-74.6C8.2,-83.7,29.3,-80.1,41.5,-73.2Z" />
                                <defs>
                                    <linearGradient id="blob-gradient" gradientTransform="rotate(90)">
                                        <stop offset="0%" stopColor="#2563eb" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div ref={imageRef} style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '0.85',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 1,
                            backgroundColor: 'var(--card-bg)',
                            transition: 'transform 0.1s ease-out'
                        }}>
                            <img
                                src="/profile.png"
                                alt="Isuru Udana Pinthu"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>

                    <div className="about-text">
                        <p className="about-reveal" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                            I am a <strong>2nd-year Undergraduate Student</strong> with a deep-seated passion for <strong>DevOps and Site Reliability Engineering (SRE)</strong>.
                            My fascination lies in the "lore" of complex systems—understanding how they scale, fail, and stay resilient under pressure.
                        </p>
                        <p className="about-reveal" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                            Currently, I am diving deep into the worlds of <strong>Kubernetes</strong>, <strong>Infrastructure as Code</strong>, and <strong>Observability</strong>.
                            I'm passionate about reducing toil and building systems that are not just automated, but truly reliable.
                        </p>
                        <p className="about-reveal" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                            My ultimate goal is to evolve into a proficient SRE/DevOps Engineer, contributing to the tech community and mastering the intricate dance between code and infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
