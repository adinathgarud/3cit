import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Application from/Resident Form – 3CIT Solution.pdf';


const ResidentForm = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default ResidentForm
