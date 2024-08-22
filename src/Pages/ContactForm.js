import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import landlineImage from '../assets/communication-symbol-2023-11-27-04-57-29-utc-scaled.jpg'; // Ensure you have this image in your project

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.mobile.trim()) {
            errors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = 'Mobile number is invalid';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            emailjs.send('service_nssz6bk', 'template_zg4vya9', formData, 'MyITgJlioacvfPm13')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        message: ''
                    });
                }, (err) => {
                    console.error('FAILED...', err);
                });
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-image">
                <img src={landlineImage} alt="Phone" />
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="mobile">Mobile No</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile"
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email ID</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message">Short Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                    />
                    {errors.message && <p>{errors.message}</p>}
                </div>

                <button type="submit">Submit</button>
                {successMessage && <p>{successMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
