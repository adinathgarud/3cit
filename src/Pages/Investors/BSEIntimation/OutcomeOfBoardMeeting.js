import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/BSE Intimation/Outcome of Board Meeting 03.07.24 – 3CIT Solution.pdf';


const OutcomeOfBoardMeeting = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default OutcomeOfBoardMeeting
