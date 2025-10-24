import { ROUTES } from "./routes";
type BaseSubMenu = {
  subMenuName: string;
  subMenuDesc: string;
  subMenuLink: string;
  icon: string;
};

type PreviewSubMenu = BaseSubMenu & {
  preview: {
    title: string;
    desc: string;
    img: string;
    source: string;
  };
};

export type NavItem = {
  itemName: string;
  link?: string;
  subMenu?: (BaseSubMenu | PreviewSubMenu)[];
};
export const navLinks = [
  {
    itemName: "About",
    link: ROUTES?.ABOUT,
  },
  {
    itemName: "Ecosystem",
    link: ROUTES?.ECOSYSTEM,
  },
  {
    itemName: "Docs",
    link: ROUTES?.DOCS,
  },
  {
    itemName: "Community",
    link: ROUTES?.COMMUNITY,
  },

  {
    itemName: "Products",
    subMenu: [
      {
        subMenuName: "QSafe Wallet",
        subMenuDesc: "A quantum-secure multichain wallet protecting assets across 70+ networks.",
        subMenuLink: ROUTES?.QSAFE,
        icon: "/images/common/header/qsafe-wallet.svg",
        preview: {
          title: "QSafe Wallet",
          desc: "Multi-chain, quantum secure, and built for the next generation.",
          img: "/images/common/header/qsafe-preview.webp",
          source: ROUTES?.QSAFE,
        },
      },
      {
        subMenuName: "QRN Faucet",
        subMenuDesc: "Claim free QRN test tokens to explore and build on Quranium’s network.",
        subMenuLink: ROUTES?.QRN_FAUCET,
        icon: "/images/common/header/qrn-faucet.svg",
        preview: {
          title: "QRN Faucet",
          desc: "Receive test QRN and gas on the Quranium Testnet Core Layer.",
          img: "/images/common/header/faucet-preview.webp",
          source: ROUTES?.QRN_FAUCET,
        },
      },
      {
        subMenuName: "QRemix AI",
        subMenuDesc: "An AI-powered IDE to build and deploy smart contracts in minutes.",
        subMenuLink: "https://www.qremix.org/",
        icon: "/images/common/header/qremix-ai.svg",
        preview: {
          title: "QRemix AI",
          desc: "Receive test QRN and gas on the Quranium Testnet Core Layer.",
          img: "/images/common/header/qremixai-preview.webp",
          source: "https://www.qremix.org/",
        },
      },
      {
        subMenuName: "QRN Explorer",
        subMenuDesc:
          "Track and verify Quranium transactions with the official blockchain explorer.",
        subMenuLink: ROUTES?.QRN_SCAN,
        icon: "/images/common/header/qrn-explorer.svg",
        preview: {
          title: "QRN Explorer",
          desc: "Receive test QRN and gas on the Quranium Testnet Core Layer.",
          img: "/images/common/header/explorer-preview.webp",
          source: ROUTES?.QRN_SCAN,
        },
      },
    ],
  },
  {
    itemName: "Initiatives",
    subMenu: [
      {
        subMenuName: "DeQUIP Grant Program",
        subMenuDesc: "Grants and support to build on Quranium’s quantum-secure ecosystem.",
        subMenuLink: ROUTES?.GRANT_PROGRAM,
        icon: "/images/common/header/gprogram.svg",
      },
      {
        subMenuName: "Quantum Minds Podcast",
        subMenuDesc: "Conversations with global leaders on blockchain, AI, and quantum security.",
        subMenuLink: ROUTES?.QUANTUM_MINDS_PODCAST,
        icon: "/images/common/header/qmp.svg",
      },
      {
        subMenuName: "Quantum Security Awareness Day 2025",
        subMenuDesc: "A global day spotlighting the urgency of post-quantum digital security.",
        subMenuLink: ROUTES?.QUANTUM_SECURITY_AWARENESS_DAY,
        icon: "/images/common/header/awareness.svg",
      },
      {
        subMenuName: "Next Gen Innovators",
        subMenuDesc: "Supporting tomorrow’s visionaries at the forefront of emerging technology.",
        subMenuLink: ROUTES?.NEXT_GEN_INNOVATORS,
        icon: "/images/common/header/nextgen.svg",
      },
      {
        subMenuName: "Global Roadshow 2025",
        subMenuDesc: "A global mission to raise awareness of post-quantum digital security.",
        subMenuLink: ROUTES?.GLOBAL_ROADSHOW,
        icon: "/images/common/header/roadshow.svg",
      },

      {
        subMenuName: "The Uncrackable Conversation",
        subMenuDesc:
          "Where experts in the Web3 space discuss building an uncrackable digital world.",
        subMenuLink: ROUTES?.UNCRACKABLE_CONVERSATION,
        icon: "/images/common/header/tuc.svg",
      },
      {
        subMenuName: "DeQUIP",
        subMenuDesc: "A framework ensuring blockchain stays secure in the quantum era.",
        subMenuLink: ROUTES?.DEQUIP,
        icon: "/images/common/header/dequip.svg",
      },
      {
        subMenuName: "Layers & Lattes",
        subMenuDesc: "Coffee meetups where communities connect to discuss blockchain and beyond.",
        subMenuLink: ROUTES?.LAYERS_AND_LATTES,
        icon: "/images/common/header/lnl.svg",
      },
    ],
  },
];
