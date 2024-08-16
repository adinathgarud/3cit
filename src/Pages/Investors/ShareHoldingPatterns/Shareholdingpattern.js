import React from 'react'
import './Shareholdingpattern.css';
const Shareholdingpattern = () => {
  return (
    <div className="shareholding-patterns">
      <h3>Shareholding Patterns</h3>
      <div className="shareholding-item">
        <p>List Of Shareholder as on 31/03/2023</p>
        <a href='/list-of-shareholder-as-on-31/03/2023' className="download-btn">Download</a>
      </div>
      <div className="shareholding-item">
        <p>Share Holder as on 10/06/2024</p>
        <a href='/share-holder-as-on-10/06/2024' className="download-btn">Download</a>
      </div>
    </div>
  )
}

export default Shareholdingpattern
