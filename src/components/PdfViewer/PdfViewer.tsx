"use client";
import "./PdfViewer.css";

interface PdfViewerProps {
  file: string; // the file URL or path
}

const PdfViewer = ({ file }: PdfViewerProps) => {
  return (
    <>
      <div className="pdf-div pdf-container flex-center w-full">
        <iframe
          src={file}
          width="100%"
          className="pdf-iframe"
          frameBorder="0"
          title="PDF Viewer"
        ></iframe>
      </div>
    </>
  );
};

export default PdfViewer;
