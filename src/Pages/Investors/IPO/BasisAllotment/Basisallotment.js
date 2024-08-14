import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Basis of Allotment – 3CIT Solution.pdf';

const Basisallotment = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Basisallotment
