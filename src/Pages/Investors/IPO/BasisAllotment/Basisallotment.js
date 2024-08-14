import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from 'D:/My Main Projects/3citsolutions-main/src/assets/PDF/Basis of Allotment – 3CIT Solution.pdf';

const Basisallotment = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default Basisallotment
