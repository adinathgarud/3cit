import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './InquiryForm.css';

// Example image path
import digitalMarketingImage from '../../../assets/DigitalMarketing/marketing-market-strategy-planning-business-concept.jpg'; 

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
                .then((response) => {
                    setResponseMessage('Your inquiry has been sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    setResponseMessage('There was an error sending your inquiry.');
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="inquiry-form-section">
            <div className="inquiry-container">
                <div className="inquiry-content">
                    <div className="inquiry-image">
                        <img src={digitalMarketingImage} alt="Digital Marketing" />
                    </div>
                    <div className="inquiry-form-wrapper">
                        <h2>Inquiry Form</h2>
                        <form onSubmit={handleSubmit} className="inquiry-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'input-error' : ''}
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'input-error' : ''}
                                />
                                {errors.message && <p className="error-message">{errors.message}</p>}
                            </div>
                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                            {responseMessage && <p className="response-message">{responseMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;
