import React from 'react'
import PDFViewer from '../../../../components/PDFViewer/PDFViewer'
import samplePDF from 'D:/My Main Projects/3citsolutions-main/src/assets/PDF/Registrar & Transfer Agent – 3CIT Solution.pdf';

const RegistarTransferAgent = () => {
  return (
    <div>
      <PDFViewer pdfFile={samplePDF} />
    </div>
  )
}

export default RegistarTransferAgent
