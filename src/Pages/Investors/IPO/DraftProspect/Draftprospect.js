import React from 'react';
import PDFViewer from '../../../../components/PDFViewer/PDFViewer';  // Adjust the import path as necessary
import samplePDF from 'D:/My Main Projects/3citsolutions-main/src/assets/PDF/Draft Prospectus – 3CIT Solution.pdf';

const DraftprospectPage = () => {
    return (
        <div className='draft-prospect-container'>
            <PDFViewer pdfFile={samplePDF} />
        </div>
    );
};

export default DraftprospectPage;