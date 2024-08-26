// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/3CIT-Logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column logo-info">
                    <img src={logo} alt="Company Logo" className="footer-logo" />
                    <p>3C IT Total Infrastructure Solutions is a pioneering force in providing end-to-end IT infrastructure solutions. With a focus on innovation, reliability, and client-centricity, we leverage cutting-edge technologies to optimize and secure your digital landscape.</p>
                    <div className="social-icons">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/3citsolutions_/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/3citsolutions/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
                    </div>
                </div>
                <div className="footer-column quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/companyoverview">Company</Link></li>
                        <li><Link to="/investors">Investor</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/careers">Career</Link></li>
                        <li><Link to="/blog">News & Updates</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-column get-in-touch">
                    <h2>Get In Touch</h2>
                    <p>104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India.</p>
                    <p>Phone: 08080669082</p>
                    <p>e-Mail: hr@3citsolutions.com <br />admin@3citsolutions.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} 3CIT Solutions Powered by Azown Technology.</p>
            </div>
        </footer>
    );
};

export default Footer;
