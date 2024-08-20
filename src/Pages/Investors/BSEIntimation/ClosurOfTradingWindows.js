import React from 'react'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/BSE Intimation/Closure of Trading Window_28.06.2024 – 3CIT Solution.pdf';

const ClosurOfTradingWindows = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default ClosurOfTradingWindows
