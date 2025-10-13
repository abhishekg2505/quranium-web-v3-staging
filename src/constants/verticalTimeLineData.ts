// timelineData.ts
export interface verticalTimeLineData {
  period: string;
  title: string;
  items: string[];
  row: "above" | "below";
  planned?: boolean;
  mesh?: boolean;
}

export const verticalTimeLineData: verticalTimeLineData[] = [
  {
    period: "H1 2024",
    title: "",
    items: [
      "Assembled Core Team specializing in post-quantum blockchain security",
      "Winner of DMCC Best Web3 Startup of 2024",
      "Secured global partnership with PwC for enterprise blockchain solutions delivery",
      "Grew community to 50K+",
      "Established our Headquarters in Switzerland",
      "Quantum-secure PoW Testnet",
      "R&D of quantum safe wallet (Qsafe)",
      "Secured Seed Round investment",
    ],
    row: "below",
    mesh: true,
  },

  {
    period: "Q1 2025",
    title: "",
    items: [
      "Quantum-secure PoW Mainnet live",
      "300+ Events Global Roadshow across 30+ Countries",
      "Developed EVM compatibility",
      "Secured strategic round investment",
    ],
    row: "above",
  },
  {
    period: "Q2 2025",
    title: "",
    items: [
      "Animoca Brands invests in Quranium",
      "Launched PoS Convergence Layer Testnet",
      "Launched QSafe Wallet",
      "Launched QRemix AI Builder",
      "100+ partnerships secured",
      "400k+ Gamer Alliance Partnership Signed",
    ],
    row: "below",
  },
  {
    period: "Q3 2025",
    title: "",
    items: [
      "Certik Audit Complete",
      "100+ AI Games Market Launch",
      "Launchpad Public Sales",
      "Mainnet Launch of Quranium Layer 1 *",
      "DeQUIP Grant Program Launch",
      "QSafe Wallet Staking Integration",
      "QxSwap DEX Mainnet and staking",
      "NFT Module Activated",
    ],
    row: "above",
    planned: false,
  },
  {
    period: "Q4 2025",
    title: "",
    items: [
      "TGE & Exchange Listings",
      "Post-quantum cross-chain Bridge",
      "Quantum-secure BTC & ETH reserve protocol",
      "Agentic AI Whitepaper Announced",
      "Lending/Borrowing Money Market dApp Launch",
      "Liquid Staking dApp Launch ",
    ],
    row: "below",
    planned: false,
  },
  {
    period: "H1 2026",
    title: "",
    items: [
      "Mainnet Upgrade: Post-quantum Financial Infrastructure for banking, payments and remittance",
      "Stablecoin integration",
      "Post-quantum P2P Communication protocol",
      "QIP Community Governance Portal Launch",
    ],
    row: "above",
    planned: false,
  },
  {
    period: "H2 2027",
    title: "",
    items: [
      "Mainnet Upgrade: Post-quantum AI Communication Infrastructure",
      "Launch Agentic AI verification protocol",
      "Complete integration of first Institutional Bank as PoC",
    ],
    row: "below",
    planned: false,
  },
];
