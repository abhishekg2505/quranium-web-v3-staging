import CookiesPolicy from "@/src/components/cookiesPolicy/CookiesPolicy";
import { cookiespolicyMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
export const metadata = {
  title: {
    default: cookiespolicyMetaData.title,
    template: `%s | ${cookiespolicyMetaData.title}`,
  },
  description: cookiespolicyMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: cookiespolicyMetaData.url,
    title: cookiespolicyMetaData.title,
    description: cookiespolicyMetaData.description,
    siteName: cookiespolicyMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: cookiespolicyMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cookiespolicyMetaData.title,
    description: cookiespolicyMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
const cookiesPolicyPage = () => {
  return (
    <div>
      <CookiesPolicy />
    </div>
  );
};

export default cookiesPolicyPage;
