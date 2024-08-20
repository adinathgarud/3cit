import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../assets/PDF/Financial Result/Financial Result 03.07.24 – 3CIT Solution.pdf';

const Financialresultpdf = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Financialresultpdf
