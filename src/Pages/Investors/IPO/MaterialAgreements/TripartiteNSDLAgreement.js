import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from 'D:/My Main Projects/3citsolutions-main/src/assets/PDF/Tripartite NSDL Agreement – 3CIT Solution.pdf';

const TripartiteNSDLAgreement = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default TripartiteNSDLAgreement
