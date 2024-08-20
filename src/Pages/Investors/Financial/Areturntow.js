import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Financial/Return 2021-22 – 3CIT Solution.pdf';

const Areturntow = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Areturntow
