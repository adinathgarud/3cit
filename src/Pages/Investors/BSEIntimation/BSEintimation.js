import React from 'react'
import './BSEintimation.css'
import bannerImage from '../../../assets/financial-bg.jpg'
const documents = [
  { id: 1, title: 'Closure Of Trading Windows', icon: '📄', downloadLink: '#' },
  { id: 2, title: 'Outcome Of Board Meeting', icon: '🔍', downloadLink: '#' },
  { id: 3, title: 'Non Applicability of Reg 23(9)', icon: '📑', downloadLink: '#' },
];
const BSEintimation = () => {
  return (
    <>
        <div className="bse-banner">
            <img src={bannerImage} alt="BSE Intimation" className="banner-image" />
            <div className="banner-text">
                <h1>Investors</h1>
                <p className="banner-title">BSE Intimation</p>
            </div>
        </div>

    <div className="documents-container">
      {documents.map((doc) => (
      <div className="document-item" key={doc.id}>
        <div className="icon">{doc.icon}</div>
        <p className="document-title">{doc.title}</p>
        <a href={doc.downloadLink} className="download-button">Download</a>
    </div>
    ))}
   </div>

   </>
  )
}

export default BSEintimation
