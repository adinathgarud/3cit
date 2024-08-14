import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Abridged Prospectus – 3CIT Solution.pdf';

const Share = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Share
