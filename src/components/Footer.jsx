import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__container">
                <p className="footer__text">
                    © {currentYear} Rohit Raj. Built with <Heart size={14} className="footer__heart" /> using React.
                </p>
                <div className="footer__links">
                    <a
                        href="https://github.com/rohitraj1711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohitraj1711/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="mailto:rohitraj820883@gmail.com"
                        className="footer__link"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
