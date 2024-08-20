import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Financial/Return 2020-21 – 3CIT Solution.pdf';

const Areturnone = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Areturnone
