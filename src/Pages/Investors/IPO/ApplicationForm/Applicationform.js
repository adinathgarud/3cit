import React from 'react'
import AgreementImage from '../../../../assets/data-center-computer.png';
import './Applicationform.css'
const Applicationform = () => {

  const forms = [
    { title: "Resident Form", link: "/residentform" },
    { title: "Non Resident Form", link: "/non-residen-form" },
    { title: "Rivision Resident Form", link: "/rivision-residen-form" },
    { title: "Rivision Non Resident Form", link: "/rivision-non-resident-form" },
    
  ];

  return (
    <div className="application-form-container">
      <div className="application-form-header">
        <h2>Application Form</h2>
      </div>

      <div className="application-form-grid">
        {forms.map((agreement, index) => (
          <div className="application-from-item" key={index}>
            <img src={AgreementImage} alt={agreement.title} />
            <h3>{agreement.title}</h3>
            <a href={agreement.link} className="download-btn">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Applicationform
