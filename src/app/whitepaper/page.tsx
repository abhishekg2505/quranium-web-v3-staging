import PdfViewer from "@/src/components/PdfViewer/PdfViewer";

const Whitepaper = () => {
  return (
    <>
      <head>
        <title>Whitepaper - One Pager | Quranium</title>
      </head>
      <PdfViewer file={"/pdf/QRN-White-Paper-VF.pdf"} />
    </>
  );
};

export default Whitepaper;
