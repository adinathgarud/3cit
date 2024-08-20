import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Financial/Annual-Report_2020-21 – 3CIT Solution.pdf';


const Areportone = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Areportone
