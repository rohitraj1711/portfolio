import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const SERVICE_ID = 'service_fuq70al';
const TEMPLATE_ID = 'template_hglsgii';
const PUBLIC_KEY = 'tcY2kKEyk8eCtVSy9';

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact__subtitle">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__form-group">
                        <label htmlFor="name" className="contact__label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="contact__input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="contact__form-group">
                        <label htmlFor="email" className="contact__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="contact__input"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="contact__form-group">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="contact__input contact__textarea"
                            placeholder="Your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="contact__btn"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 size={18} className="contact__btn-icon contact__btn-icon--spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={18} className="contact__btn-icon" />
                                Send Message
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <div className="contact__status contact__status--success">
                            <CheckCircle size={18} />
                            <span>Message sent successfully! I'll get back to you soon.</span>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="contact__status contact__status--error">
                            <XCircle size={18} />
                            <span>Something went wrong. Please try again.</span>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
