import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/BSE Intimation/Non Applicability of Reg 23(9) 31.03.2024 – 3CIT Solution.pdf';

const NonApplicabilityofReg = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default NonApplicabilityofReg
