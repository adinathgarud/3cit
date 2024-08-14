import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer';  // Adjust the import path as necessary
import samplePDF from '../../../../assets/PDF/Prospectus – 3CIT Solution.pdf';

const Prospect = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Prospect
