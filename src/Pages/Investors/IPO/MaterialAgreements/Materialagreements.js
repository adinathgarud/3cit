import React from 'react';
import './Materialagreements.css';
import AgreementImage from '../../../../assets/data-center-computer.png';

const Materialagreements = () => {
  const agreements = [
    { title: "Shear Escrow Agreement", link: "/shareescrowagreements" },
    { title: "Market Maker Agreement", link: "/market-maker-agreement" },
    { title: "Underwriting Agreement", link: "/underwriting-agreement" },
    { title: "Offer Agreements", link: "/offer-agreement" },
    { title: "Registar & Transfer Agent", link: "/registertransfer-agent" },
    { title: "Banker Agreements", link: "/banker-agreement" },
    { title: "Tripartite NSDL Agreement", link: "/tripartite-nsdl-agreement" },
    { title: "Tripartite CDSL Agreement", link: "/tripartite-cdsl-agreement" },
  ];

  return (
    <div className="material-agreements-container">
      <div className="material-agreements-header">
        <h2>Material Agreements</h2>
      </div>

      <div className="material-agreements-grid">
        {agreements.map((agreement, index) => (
          <div className="material-agreement-item" key={index}>
            <img src={AgreementImage} alt={agreement.title} />
            <h3>{agreement.title}</h3>
            <a href={agreement.link} className="download-btn">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materialagreements;
