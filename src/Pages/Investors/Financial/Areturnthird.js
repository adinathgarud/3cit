import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Financial/Return 2022-23 – 3CIT Solution.pdf';

const Areturnthird = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Areturnthird
