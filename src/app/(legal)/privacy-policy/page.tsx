import PrivacyPolicy from "@/src/components/privacyPolicy/PrivacyPolicy";
import { privacypolicyMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
export const metadata = {
  title: {
    default: privacypolicyMetaData.title,
    template: `%s | ${privacypolicyMetaData.title}`,
  },
  description: privacypolicyMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: privacypolicyMetaData.url,
    title: privacypolicyMetaData.title,
    description: privacypolicyMetaData.description,
    siteName: privacypolicyMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: privacypolicyMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: privacypolicyMetaData.title,
    description: privacypolicyMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
const privacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default privacyPolicyPage;
