import { aboutUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import Script from "next/script";

export const metadata = {
  title: {
    default: aboutUsMetaData.title,
    template: `%s | ${aboutUsMetaData.title}`,
  },
  description: aboutUsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: aboutUsMetaData.url,
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    siteName: aboutUsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: aboutUsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function ApplyGrantProgram() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="pt-20 pb-24">
        <div
          style={{ width: "100%", height: "500px" }}
          data-fillout-id="ucsXKHndAXus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
        <Script src="https://server.fillout.com/embed/v1/" strategy="lazyOnload" />
      </div>
    </main>
  );
}
