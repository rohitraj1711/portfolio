import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__container">
                <p className="footer__text">
                    © {currentYear} Rohit Raj. Built with React.
                </p>
                <div className="footer__links">
                    <a
                        href="https://github.com/rohitraj1711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohitraj1711/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:rohitraj820883@gmail.com"
                        className="footer__link"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
