import React from 'react';
import './Contact.css';
import contact_location from '../assets/contact_location.jpeg';
import contact_callus from '../assets/customer-support.png';
import contact_emailus from '../assets/contact_emailus.png';
//import landlineImage from '../assets/communication-symbol-2023-11-27-04-57-29-utc-scaled.jpg'; // Ensure you have this image in your project
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
                    <h1>CONTACT US</h1>
                    <p>Reach Out, <br /> We're Here for You!</p>
                    
                </div>
                <div className="contact-cards">
                    <div className="contact-card">
                        <img src={contact_location} alt="contact_location" />
                        <h3>Head Office</h3>
                        <p>Flat No.104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India. Phone No : 020-41226874</p>
                    </div>
                    <div className="contact-card">
                        <img src={contact_callus} alt="contact_callus" />
                        <h3>Call us directly</h3>
                        <p>Sales: 08080669082</p>
                    </div>
                    <div className="contact-card">
                        <img src={contact_emailus} alt="contact_emailus" />
                        <h3>E-mail us</h3>
                        <p>hr@3citsolutions.com admin@3citsolutions.com</p>
                    </div>
                </div>
      <div className="contact-form-container">
      
      <ContactForm />
      </div>

      <div className="contact-map">
      <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.7875273865158!2d73.86624404510566!3d18.52211754548348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05da0e7039d%3A0x3c88b1e335c1e4f1!2s3C%20IT%20SOLUTIONS%20%26%20TELECOMS%20INDIA%20LTD!5e0!3m2!1sen!2sin!4v1724250329616!5m2!1sen!2sin"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

