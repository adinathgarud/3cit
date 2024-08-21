import React,{ useState } from 'react';
import './CloudServices.css'; // Import the CSS file for styling
import backgroundImage from '../../../../assets/securely-share-and-back-up-files-with-cloud-techno-2023-11-27-05-25-08-utc-scaled.jpg'; // Replace with your actual image path
import cloudconsulting from '../../../../assets/data-center-security.png'
import cloudimplementation from '../../../../assets/data-center-connectivity.png'
import cloudmanaged from '../../../../assets/RemoteManagement.png'
import clouddevops from '../../../../assets/DataProtection.png'
import cloudicon from '../../../../assets/play.png'
import YouTube from 'react-youtube';
const CloudServices = () => {

  


  const [isModalOpen, setModalOpen] = useState(false);

  const videoId = "0jOtN38MTtk"; // Replace with your video ID
  const videoOptions2 = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="cloud-service">
        <div className="cloud-content">
          <h1>Cloud Services</h1>
        </div>
      </div>
      
      <div className="cloud-service-container">
        <div className="cloud-text-content">
          <h2>Cloud Services</h2>
          <p>
          Our cloud solutions are more than just a migration; they represent a paradigm shift in how businesses leverage technology to drive innovation and agility. With us, you embark on a transformative journey, leveraging the cloud's scalability, flexibility, and efficiency to propel your organization into the digital age. Our cloud services are tailored to align your business objectives with the right cloud solutions while minimizing disruptions and enhancing scalability. We continuously monitor, manage, and optimize your cloud infrastructure, increase efficiency, enhance time-to-market, and deploy reliable infrastructure:
          </p>
        </div>
        <div className="cloud-image-content">
          <img src={backgroundImage} alt="Cloud Services" />
        </div>
      </div>

      <div className="cloud-services">
        <div className="service">
          <div className="icon"><img src={cloudconsulting} alt='Cloud Consulting' /></div>
          <h3>Cloud Consulting</h3>
          <p>
            Our team of experts doesn't just understand the cloud; we speak its language and guide our clients through every stage of cloud adoption. Our consultants are trusted advisors for Cloud clients. We blend technical prowess with business acumen to tailor cloud strategies that align with customer goals.
          </p>
        </div>
        <div className="service">
          <div className="icon"><img src={cloudimplementation} alt='Cloud Implementation' /></div>
          <h3>Cloud Implementation</h3>
          <p>
            Our cloud implementation services are not just about deploying solutions; they're about executing with precision. We turn customers' cloud blueprints into a reality – ensuring every component integrates seamlessly, deploying robust security measures, optimizing their cloud infrastructure.
          </p>
        </div>
        <div className="service">
          <div className="icon"><img src={cloudmanaged} alt='Cloud Managed Services' /></div>
          <h3>Cloud Managed Services</h3>
          <p>
            Reliability is not optional – it's mandatory. Our cloud management services go beyond traditional support. We ensure that Client cloud environment operates at peak performance around the clock. From proactive monitoring to performance tuning to security management to real-time issue resolution.
          </p>
        </div>
        <div className="service">
          <div className="icon"><img src={clouddevops} alt='Cloud DevOps' /></div>
          <h3>Cloud DevOps</h3>
          <p>
            3C IT Solution is empanelled with all leading cloud partners in the industry with their support DevOps is a philosophy ingrained in our DNA. Our DevOps services are the engine that propels your development and operations into seamless collaboration.We ensure automated workflows, collaborative development, rapid deployments, and continuous improvement as an everyday practice.
         </p>
        </div>
      </div>

      <div className="cloud-header">
        <div className="cloud-overlay">
          <div className="cloud-header-content">
         
      {!isModalOpen ? (
        <div className="play-icon-container1" onClick={handlePlayClick}>
          <div className="play-icon"><img src={cloudicon} alt="play icon" /></div> {/* Unicode for play icon */}
        </div>
      ) : (
        <div className="video-modal">
          <button className="close-button" onClick={handleCloseClick}>&times;</button>
          <YouTube videoId={videoId} opts={videoOptions2} />
        </div>
      )}
   
            <h3>3CIT Solutions</h3>
            <h1>Soar High with Innovative <br/>Cloud Solutions.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloudServices;
