export interface TimelineItem {
  title: string;
  items: string[];
  quarter?: string;
  planned?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    title: "H1 2024",
    items: [
      "Assembled Core Team specializing in post-quantum blockchain security",
      "Winner of DMCC Best Web3 Startup of 2024",
      "DMCC Registration - Sponsored by Bybit",
      "Launched The Quantum Minds Podcast",
      "Secured global partnership with PwC",
    ],
  },
  {
    title: "H2 2024",
    items: [
      "Grew community to 50k+",
      "Established our Headquarters in Switzerland",
      "Quantum-secure PoW Testnet",
      "R&D of quantum safe wallet (Qsafe)",
      "Secured Seed Round investment",
    ],
  },
  {
    title: "Q1 2025",
    items: [
      "Quantum-secure PoW Mainnet live",
      "Global Roadshow announced",
      "Developed EVM compatibility",
      "Secured strategic round investment",
    ],
  },
  {
    title: "Q2 2025",
    items: [
      "Animoca Brands invests in Quranium",
      "Launched PoS Convergence Layer Testnet",
      "Released The Uncrackable Conversation",
      "Launched QSafe Wallet",
      "Launched QRemix AI Builder",
    ],
  },
  {
    title: "Q3 2025",
    items: [
      "QRNScan Mainnet",
      "NFT Module Activated",
      "TGE & Exchange Listings",
      "Mainnet Launch of Quranium Layer 1",
    ],
    planned: true,
  },
  {
    title: "Q4 2025",
    items: [
      "DeQUIP Incubator launch",
      "Cross-chain Bridge Alpha",
      "Liquid Staking dApp Launch",
      "QMoney Market dApp Launch",
    ],
    planned: true,
  },
  {
    title: "H1 2026",
    items: ["Launch AI Agent ID verification protocol", "QIP Community Governance Portal Launch"],
    planned: true,
  },
];
