import React from 'react';
import image from '../../assets/vertiv.png'; // Update the path as needed
import './Investors.css';
const Investors = () => {
  return (
    <div className="investor-container">
    <h2 className="investor-heading">Why Invest with 3CIT</h2>
    <div className="investor-content">
        <div className="investor-text">
            <h3>1. Innovation that Drives Value:</h3>
            <p>We pioneer transformative technologies and solutions, ensuring that your investment aligns with the future of digital evolution.</p>
            <h3>2. Steadfast Commitment to Excellence:</h3>
            <p>With a track record of delivering results, our commitment to operational excellence and sustainable growth is at the core of every endeavor.</p>
            <h3>3. Transparency and Accountability:</h3>
            <p>We prioritize transparency in communication and uphold a high standard of accountability, fostering a trusting and collaborative relationship with our investors.</p>
            <p>Explore the potential of investing in 3CIT Solutions, where innovation meets opportunity. Join us on this exciting journey towards shaping the future of technology and business.</p>
            <button className="read-more-button">Read More Details</button>
        </div>
        <div className="investor-image">
            <img src={image} alt="Investment" />
        </div>
    </div>
</div>
  )
}

export default Investors
