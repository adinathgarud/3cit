import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Sharing pattners/Shareholding Patterns – 3CIT Solution.pdf';

const Shearholdingone = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Shearholdingone
