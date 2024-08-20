import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Sharing pattners/Share Holder As on 10_06_2024 – 3CIT Solution.pdf';

const Shearholdingtow = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Shearholdingtow
