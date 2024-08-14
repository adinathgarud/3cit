import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Tripartite NSDL Agreement – 3CIT Solution.pdf';

const TripartiteNSDLAgreement = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default TripartiteNSDLAgreement
