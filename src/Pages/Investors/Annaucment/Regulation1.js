import React from 'react';
import PDFViewer from '../../../../components/PDFViewer/PDFViewer';  // Adjust the import path as necessary
import samplePDF from '../../../../assets/PDF/Draft Prospectus – 3CIT Solution.pdf';

const Regulation1 = () => {
  return (
    <>
        
        <div className='draft-prospect-container'>
            <PDFViewer pdfFile={samplePDF} />
        </div>
        
        </>
  )
}

export default Regulation1
