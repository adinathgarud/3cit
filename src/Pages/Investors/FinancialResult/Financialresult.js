import React from 'react'
import './Financialresult.css'
//import bannerImage from '../../../assets/financial-bg.jpg'
import resulticon from '../../../assets/datacenter_computer_services.png'
const Financialresult = () => {
  return (
            <>
            <div className="finacial-result-main">
               
                <div className="result-text">
                    <h1>Investors</h1>
                    <p className="result-title">Financial Result</p>
                </div>
            </div>
        
    
        <div className="financial-result-container">
        <div className="financial-result-item">
            <div className="result-icon">
                <img src={resulticon} alt='Icon'/>
            </div>
            <p className="financial-result-title">Financial Result 03.07.24</p>
            <a href="#" className="download-button">Download</a>
        </div>
    </div>
    </>       
     
    
  )
}

export default Financialresult
