import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from 'D:/My Main Projects/3citsolutions-main/src/assets/PDF/Offer Agreement – 3CIT Solution.pdf';

const OfferAgreements = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default OfferAgreements
