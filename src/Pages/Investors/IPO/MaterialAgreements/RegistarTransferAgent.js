import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from '../../../../assets/PDF/Registrar & Transfer Agent – 3CIT Solution.pdf';

const RegistarTransferAgent = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default RegistarTransferAgent
