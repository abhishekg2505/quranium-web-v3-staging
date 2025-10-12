// data/timelineData.ts

export interface TimelineSection {
  period: string;
  items: string[];
}

export const timeline: TimelineSection[] = [
  {
    period: "H1 2024",
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
  },
  {
    period: "Q1 2025",
    items: [
      "Quantum-secure PoW Mainnet live",
      "300+ Events Global Roadshow across 30+ Countries",
      "Developed EVM compatibility",
      "Secured strategic round investment",
    ],
  },
  {
    period: "Q2 2025",
    items: [
      "Animoca Brands invests in Quranium",
      "Launched PoS Governance Layer Testnet",
      "Launched Qsafe Wallet",
      "Launched QRemix AI Builder",
      "100+ partnerships secured",
      "400K+ Gamer Alliance Partnership Signed",
    ],
  },

  {
    period: "Q3 2025",
    items: [
      "Certik Audit Complete",
      "100+ AI Games Market Launch",
      "Launchpad Public Sales",
      "Mainnet Launch of Quranium Layer 1",
      "DeQUIP Grant Program Launch",
    ],
  },
];
