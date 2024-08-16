import React from 'react'
import './Financialresult.css'
import bannerImage from '../../../assets/financial-bg.jpg'

const Financialresult = () => {
  return (
    
    
    
        
            <>
            <div className="finacial-result">
                <img src={bannerImage} alt="Financial Result" className="result-image" />
                <div className="result-text">
                    <h1>Investors</h1>
                    <p className="result-title">Financial Result</p>
                </div>
            </div>
        
    
        <div className="financial-container">
        <div className="financial-item">
            <div className="icon">
                <img src="E:/React js/myappc/src/images/financial-document_17083565.png"/>
            </div>
            <p className="financial-title">Financial Result 03.07.24</p>
            <a href="#" className="download-button">Download</a>
        </div>
    </div>
    </>       
     
    
  )
}

export default Financialresult
