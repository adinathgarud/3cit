import React from 'react'
import './MultibrandHardware.css'
import supportImage from '../../../../assets/VNU_M652_01.png'
import preventation from '../../../../assets/home-competency.png'
import documentation from '../../../../assets/home-digital.png'
import remote from '../../../../assets/RemoteManagement.png'
import vendor from '../../../../assets/home-infrastructure.png'
import BreakFixService from '../../../../assets/1111-300x131.png'

const MultibrandHardware = () => {
  return (
    <>
    <div className="multibrand-container">
      <div className="top-content">
      <h3># Hardware Repair</h3>
      <h1>Multibrand<br/> Hardware Break-<br/>Fix Service</h1>
      </div>
    </div>

<div className="Multibrand-support-container">
<div className="Multibrand-image-section">
  <img src={supportImage} alt="Support Illustration" className="support-image" />
</div>
<div className="Multibrand-text-section">
  <h2>
    Our <span>Support</span> Center
  </h2>
  <p>
    A Multibrand Hardware Break-Fix Service refers to a support model provided by a service
    provider to address hardware issues across a variety of brands or manufacturers. In the
    IT context, "break-fix" typically refers to a type of support service where the service
    provider is engaged to fix or repair hardware components when they malfunction or "break."
    Here are key components and considerations related to a Multibrand Hardware Break-Fix
    Service:
  </p>
</div>
</div>

<div className="Multibrand-services-container">
            <div className="multibrand-service-item">
                <div className="icon"><img src={preventation} alt="Preventive Maintenance" /></div>
                <h3>Preventive Maintenance</h3>
                <p>Keep your business running smoothly with 3CIT! We provide top-notch Preventive Maintenance services for your hardware, ensuring optimal performance and reliability.</p>
            </div>
            <div className="multibrand-service-item">
                <div className="icon"><img src={documentation} alt="Documentation & Reporting" /></div>
                <h3>Documentation & Reporting</h3>
                <p>Enhance transparency and efficiency with 3CIT's Documentation and Reporting services for hardware. Stay informed, stay ahead!</p>
            </div>
            <div className="multibrand-service-item">
                <div className="icon"><img src={remote} alt="Remote Monitoring" /></div>
                <h3>Remote Monitoring</h3>
                <p>Experience seamless operations with 3CIT's Remote Monitoring solutions. Monitor and manage your systems from anywhere, ensuring optimal performance.</p>
            </div>
            <div className="multibrand-service-item">
                <div className="icon"><img src={vendor} alt="Vendor" /></div>
                <h3>Vendor Relationships</h3>
                <p>Elevate your business with 3CIT's strong vendor relationships. Unlock access to cutting-edge technologies and solutions for sustainable growth.</p>
            </div>
        </div>

        <div className="Multibrand-breakfix-banner">
            Break-Fix Service
        </div>


        <div className="hardware-support-container">
            <div className="hardware-support-content">
            <img src={BreakFixService} alt="Multibrand Hardware" />
            </div>
            </div>
            <div className="contact-us">
                <button><a href='/contact'>Contact Us</a></button>
            </div>
</>
  )
}

export default MultibrandHardware
