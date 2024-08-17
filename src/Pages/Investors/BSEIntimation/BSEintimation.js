import React from 'react'
import './BSEintimation.css'
import bannericon from '../../../assets/data-center-computer.png'
const documents = [
  { id: 1, title: 'Closure Of Trading Windows', icon: bannericon, downloadLink: '/closure-of-trading-windows' },
  { id: 2, title: 'Outcome Of Board Meeting', icon: bannericon, downloadLink: '/outcome-of-board-meeting' },
  { id: 3, title: 'Non Applicability of Reg 23(9)', icon: bannericon, downloadLink: '/non-applicability-of-reg' },
];
const BSEintimation = () => {
  return (
    <>
        <div className="bse-banner">
           
            <div className="banner-text">
                <h1>Investors</h1>
                <p className="banner-title">BSE Intimation</p>
            </div>
        </div>

    <div className="documents-container">
      {documents.map((doc) => (
      <div className="document-item" key={doc.id}>
        <div className="icon"><img src={doc.icon} alt="icon" /></div>
        <p className="document-title">{doc.title}</p>
        <a href={doc.downloadLink} className="download-button">Download</a>
    </div>
    ))}
   </div>

   </>
  )
}

export default BSEintimation
