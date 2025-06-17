import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footer } from "@/src/constants/footer";
import { socialMedia } from "@/src/constants/socialMedia";
import { LangIcon } from "@/src/constants/LangIcon";

export default function Footer() {
  return (
    <footer className="overflow-hidden relative z-10 bg-black border-t border-white-1/20 text-white">
      <div className="max-w-[1440px] mx-auto relative z-10 px-4 md:px-10 lg:px-16 xl:px-20">
        <div className="py-12 flex flex-col gap-y-20 items-start justify-center lg:flex-row">
          <div className="mr-0 sm:mr-[43px] md:mr-[86px] lg:mr-[100px] xl:mr-[172px] max-w-full lg:max-w-56 space-y-5">
            <Link href="/">
              <Image src="/logo.svg" alt="Quranium Logo" width={152} height={22} priority />
            </Link>
            <p className="text-p2">
              Sign up to our <span className="whitespace-nowrap">e-newsletter</span>, Pulse by
              Quranium.
            </p>
            <div className="group">
              <Link
                href="https://www.linkedin.com/newsletters/quranium-pulse-7317467565704765441/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="group relative text-buttons !flex overflow-hidden"
                >
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                    Subscribe
                    <MoveRight className="ml-2 h-5 w-5 group-hover:stroke-black group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="lg:max-w-full lg:mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footer.map((section) => (
              <div key={section.title} className="pb-6">
                <h3 className="text-p3 pb-2 md:pb-6 opacity-40">{section.title}</h3>
                <ul className="text-p3 space-y-[10px] text-gray-300">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        className="cursor-pointer hover:opacity-60 duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pb-12">
          <div className="mt-10 py-6 md:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="space-x-8 items-center hidden">
              {LangIcon.map((lang) => (
                <Link href={lang.link} key={lang.name} target="_blank">
                  <Image
                    src={lang.logo}
                    alt={lang.name}
                    width={13}
                    height={18}
                    className="cursor-pointer hover:opacity-50 duration-300"
                  />
                </Link>
              ))}
            </div>
            <div className="text-p5 text-gray-400">
              © 2025 — Quranium Global. All Rights Reserved.
            </div>
            <div className="flex space-x-4 items-center">
              {socialMedia.map((social) => (
                <Link href={social.link} key={social.name} target="_blank">
                  <Image
                    src={social.logo}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="cursor-pointer hover:opacity-50 duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#601DFF] blur-[200px] opacity-50 pointer-events-none z-0" />
    </footer>
  );
}
