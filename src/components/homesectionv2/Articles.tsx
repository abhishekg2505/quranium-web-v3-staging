import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const quraniumInsights = [
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-1.png",
    altText: "Quantum Security Awareness Day: A New Chapter in Digital Security",
    description: "Quantum Security Awareness Day: A New Chapter in Digital Security",
    link: "https://quranium-org.medium.com/quantum-security-awareness-day-a-new-chapter-in-digital-security-ed78fb30ed20",
  },
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-2.png",
    altText: "Crypto Wallets 101",
    description: "Crypto Wallets 101: How Do They Actually Work?",
    link: "https://quranium-org.medium.com/crypto-wallets-101-how-do-they-actually-work-1f363f4e7c52",
  },
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-3.png",
    altText: "QSafe Wallet Launch",
    description: "April: The Month of Quantum — Two Global Days, One Urgent Conversation",
    link: "https://quranium-org.medium.com/april-the-month-of-quantum-two-global-days-one-urgent-conversation-1744d0a4736c",
  },
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-4.png",
    altText: "Partnership Announcement",
    description: "The Future-Proof Innovators: A Guide to DeQUIP Brands",
    link: "https://quranium-org.medium.com/the-future-proof-innovators-a-guide-to-dequip-brands-1557cfc9fabb",
  },
];

export default function Articles() {
  return (
    <section id="blog" className="scroll-mt-24 py-16 container mx-auto px-4 md:px-20 bg-background">
      <div className="space-y-12">
        <div className="grid md:grid-cols-[60%_40%] gap-6 md:gap-0 items-center">
          <div>
            <h2 className="text-h4 md:text-h3 font-semibold">Articles</h2>
            <p className="text-p2 font-open-sans text-white-2 mt-2">What&rsquo;s trending?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quraniumInsights.map((insight, index) => (
            <Link key={index} href={insight.link} target="_blank">
              <div
                key={index}
                className="flex-1 h-full border border-white-1/10 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={insight.imageSrc}
                  alt={insight.altText}
                  width={1200}
                  height={627}
                  className="object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-h6 text-white-1">{insight.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
