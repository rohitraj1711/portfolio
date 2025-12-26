import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    const [showTyping, setShowTyping] = useState(false);
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        // Start typing animation after a brief delay
        const startTimer = setTimeout(() => setShowTyping(true), 500);
        // Complete typing after animation duration
        const completeTimer = setTimeout(() => setTypingComplete(true), 3000);

        return () => {
            clearTimeout(startTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <p className="hero__greeting">Hi, I'm</p>
                    <h1 className={`hero__name ${typingComplete ? 'hero__name--glitch' : ''}`}>
                        {showTyping && (
                            <span className={`hero__name-text ${!typingComplete ? 'hero__name-text--typing' : ''}`}>
                                Rohit Raj
                            </span>
                        )}
                    </h1>
                    <h2 className="hero__title">Full Stack Developer</h2>
                    <p className="hero__description">
                        Building modern web and mobile applications with React, React Native, and JavaScript.
                        Passionate about creating clean, user-focused experiences.
                    </p>

                    <div className="hero__actions">
                        <a href="#contact" className="hero__btn hero__btn--primary">
                            Get In Touch
                        </a>
                        <a href="#projects" className="hero__btn hero__btn--secondary">
                            View Projects
                        </a>
                    </div>

                    <div className="hero__socials">
                        <a
                            href="https://github.com/rohitraj1711"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-link"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rohitraj1711/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="mailto:rohitraj820883@gmail.com"
                            className="hero__social-link"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <div className="hero__image-container">
                        <img
                            src="/profile.png"
                            alt="Rohit Raj"
                            className="hero__image"
                        />
                        <div className="hero__image-ring"></div>
                    </div>
                </div>

                <a href="#skills" className="hero__scroll-indicator" aria-label="Scroll to skills">
                    <ArrowDown size={20} />
                </a>
            </div>
        </section>
    );
}
