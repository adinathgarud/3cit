import React from 'react';
import './DigitalMarketing.css';

// Import images for the services
import contentcreation from '../../../assets/DigitalMarketing/online-strategy-media-marketing-icons.jpg';
import digital from '../../../assets/DigitalMarketing/290525518_ce1f8d87-4ac4-4032-b1c5-2dd1312dd722.jpg';
import graphics from '../../../assets/DigitalMarketing/8068473_63484.jpg';
import socialmedia from '../../../assets/DigitalMarketing/modern-social-media-developing-future-trend-social-media.jpg';
import videoproduction from '../../../assets/DigitalMarketing/course-has-been-held-some-people-have-sat-participated-this-content-production-course-w.jpg'
import webdevlopment from '../../../assets/DigitalMarketing/website-development-links-seo-webinar-cyberspace-concept.jpg'
import InquiryForm from './InquiryForm';
import { Helmet } from 'react-helmet';
const DigitalMarketing = () => {
    const services = [
        {
            title: 'Content Creation',
            description: 'Know more about the features and benefits of content creation service',
            image: contentcreation,
            link: 'services-single-1.html'
        },
        {
            title: 'Digital Marketing',
            description: 'Grow your business with the help of creative ideas for promotion and publicity',
            image: digital,
            link: 'services-single-2.html'
        },
        {
            title: 'Graphics Design',
            description: 'Make your social media accounts glamorous by adding creative graphics',
            image: graphics,
            link: 'services-single-3.html'
        },
        {
            title: 'Social Media Handling',
            description: 'Let us handle social media for daily updates to grow your business and PR',
            image: socialmedia,
            link: 'services-single-4.html'
        },
        {
            title: 'Video Production',
            description: 'We convert your special momnets into memories with amezing video production',
            image: videoproduction,
            link: 'services-single-4.html'
        },
        {
            title: 'Web Devlopment',
            description: 'Find our services for coustomise software and personal websites',
            image: webdevlopment,
            link: 'services-single-4.html'
        },
        // Add more services as needed
    ];

    return (
        <>
        <Helmet>
                <title> Digital Marketing - 3C IT Solutions & Telecoms (India) Private Limited</title>
                <meta charSet='utf-8' />
                <link rel="canonical" href="https://www.3citsolution.com/3cit" />
            </Helmet>
        <div className="digitalmarketing-main">
            
        </div>
        <section className="digitalmarketing-service-page">
            <div className="container">
                <div className="digitalmarketing-service-row">
                    {services.map((service, index) => (
                        <div key={index} className="digitalmarketing-service-card">
                            <div className="digitalmarketing-card-img">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="digitalmarketing-card-content">
                                <h3><a href={service.link}>{service.title}</a></h3>
                                <p>{service.description}</p>
                                <a href={service.link} className="digitalmarketing-card-link">
                                    <span className="icon-right-arrow"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <InquiryForm />
        </>
    );
};

export default DigitalMarketing;
