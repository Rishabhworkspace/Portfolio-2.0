import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function ContactView() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'' | 'sending' | 'sent'>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // REPLACE 'YOUR_FORM_ID_HERE' with your actual Formspree form ID (e.g. 'xdoqzbaw')
            const response = await fetch('https://formspree.io/f/xojnyqkw', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                // Optional: reset the button state after 3 seconds
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('');
                alert('Oops! There was a problem submitting your form');
            }
        } catch (error) {
            setStatus('');
            alert('Oops! There was a problem submitting your form');
        }
    };

    return (
        <motion.div
            className="contact-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <h2 className="contact-title">Let's talk code.</h2>
            <p className="contact-subtitle">
                I'm currently available for freelance work and open to full-time opportunities.
                Let's build something that refuses to be boring.
            </p>

            <div className="contact-links">
                <a href="mailto:rishabh.j.tripathi2903@gmail.com" className="contact-link-item">
                    <Mail size={16} className="contact-link-icon" />
                    <span className="contact-link-label">Email</span>
                    <span>rishabh.j.tripathi2903@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/rishabh-tripathi-728a77317" target="_blank" rel="noreferrer" className="contact-link-item">
                    <Linkedin size={16} className="contact-link-icon" />
                    <span className="contact-link-label">LinkedIn</span>
                    <span>in/rishabh-tripathi...</span>
                </a>
                <a href="https://www.instagram.com/rishabh_t106/" target="_blank" rel="noreferrer" className="contact-link-item">
                    <Instagram size={16} className="contact-link-icon" />
                    <span className="contact-link-label">Instagram</span>
                    <span>@rishabh_t106</span>
                </a>
                <a href="https://github.com/Rishabhworkspace" target="_blank" rel="noreferrer" className="contact-link-item">
                    <Github size={16} className="contact-link-icon" />
                    <span className="contact-link-label">GitHub</span>
                    <span>@Rishabhworkspace</span>
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-title">// Send a direct message</div>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        required
                        className="form-input"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        required
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                        required
                        className="form-textarea"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Let's build..."
                    />
                </div>

                <button type="submit" className="form-submit" disabled={status !== ''}>
                    {status === '' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            Send Message <ArrowRight size={14} />
                        </span>
                    ) : status === 'sending' ? (
                        'Transmitting...'
                    ) : (
                        'Message Sent ✓'
                    )}
                </button>
            </form>
        </motion.div>
    );
}
