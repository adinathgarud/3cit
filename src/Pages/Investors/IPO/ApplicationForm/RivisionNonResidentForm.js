import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Application from/Revision Non Resident Form – 3CIT Solution.pdf';


const RivisionNonResidentForm = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default RivisionNonResidentForm
