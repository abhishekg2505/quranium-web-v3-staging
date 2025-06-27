import { ROUTES } from "./routes";

export const footer = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: ROUTES?.ABOUT },
      { name: "Careers", href: ROUTES?.CAREERS },
      { name: "Contact", href: ROUTES?.CONTACT_US },
    ],
  },
  // {
  //   title: "Build with us",
  //   links: [
  //     // { name: "Understand our Tech", href: ROUTES?.TECHNICAL },
  //     { name: "Ecosystem", href: ROUTES.ECOSYSTEM },
  //   ],
  // },

  {
    title: "Resources",
    links: [
      { name: "Tech Documents", href: `${ROUTES?.RESOURCES}#tech-document` },
      { name: "Quantum Minds Podcast", href: `${ROUTES?.RESOURCES}#podcast` },
      { name: "Blogs", href: `${ROUTES.RESOURCES}#blog` },
      { name: "Press", href: `${ROUTES.RESOURCES}#press` },
      { name: "Media Kit", href: `${ROUTES.RESOURCES}#media-kit` },
    ],
  },
  {
    title: "Initiatives",
    links: [
      { name: "Global Roadshow 2025", href: `https://beuncrackable.com/`, target: true },
      {
        name: "Quantum Security Awareness Day",
        href: ROUTES?.QUANTUM_SECURITY_AWARENESS_DAY,
      },
      { name: "DeQUIP", href: ROUTES.DEQUIP },
      { name: "Quantum Minds Podcast", href: `${ROUTES.QUANTUM_MINDS_PODCAST}` },
      { name: "Next Gen Innovators", href: `${ROUTES.NEXT_GEN_INNOVATORS}` },
      { name: "The Uncrackable Conversation", href: `${ROUTES.UNCRACKABLE_CONVERSATION}` },
      { name: "Layers & Lattes", href: `${ROUTES.LAYERS_AND_LATTES}` },
    ],
  },
  {
    title: "Products",
    links: [
      {
        name: "QSafe Wallet",
        href: "https://qsafewallet.com/",
        target: true,
      },
      {
        name: "QRN Faucet",
        href: "https://faucet.quranium.org/",
        target: true,
      },
      {
        name: "QRN Explorer",
        href: "https://testnet.qrnscan.com/",
        target: true,
      },
    ],
  },
  {
    title: "Documentation",
    links: [
      {
        name: "Core Chain",
        href: "http://docs.quranium.org",
        target: true,
      },
      {
        name: "QSafe Wallet",
        href: "http://docs.qsafewallet.com",
        target: true,
      },
      {
        name: "QRemix AI",
        href: "http://docs.qremix.org",
        target: true,
      },
      {
        name: "QRN Explorer",
        href: "http://docs.qrnscan.com",
        target: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [{ name: "Privacy Policy", href: `${ROUTES.PRIVACY_POLICY}` }],
  },
];
