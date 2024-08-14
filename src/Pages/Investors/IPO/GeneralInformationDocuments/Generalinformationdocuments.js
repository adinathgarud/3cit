import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/General information Document – 3CIT Solution.pdf';

const Generalinformationdocuments = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Generalinformationdocuments
