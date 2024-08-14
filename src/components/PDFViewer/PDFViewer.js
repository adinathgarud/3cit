import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './PDFViewer.css';  // Create this CSS file for styling if needed

const PDFViewer = ({ pdfFile }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="pdf-viewer-container">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer 
                    fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
        
    );
};

export default PDFViewer;
