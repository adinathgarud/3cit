import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Banker Agreement – 3CIT Solution.pdf';

const BankerAgreements = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default BankerAgreements
