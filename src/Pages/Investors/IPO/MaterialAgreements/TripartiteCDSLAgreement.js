import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Tripartite CDSL Agreement – 3CIT Solution.pdf';

const TripartiteCDSLAgreement = () => {
  return (
    <div>
       <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default TripartiteCDSLAgreement
