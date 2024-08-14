import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Market Maker Agreement – 3CIT Solution.pdf';

const MarketMakerAgreement = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default MarketMakerAgreement
