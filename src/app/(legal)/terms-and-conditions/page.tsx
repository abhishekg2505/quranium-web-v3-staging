import TermsAndConditions from "@/src/components/termsAndConditions/TermsAndConditions";
import { tandcMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
export const metadata = {
  title: {
    default: tandcMetaData.title,
    template: `%s | ${tandcMetaData.title}`,
  },
  description: tandcMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: tandcMetaData.url,
    title: tandcMetaData.title,
    description: tandcMetaData.description,
    siteName: tandcMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: tandcMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: tandcMetaData.title,
    description: tandcMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
const TermsAndConditionsPage = () => {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
};

export default TermsAndConditionsPage;
