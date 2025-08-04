// timelineData.ts
export interface timelineData {
  period: string;
  title: string;
  items: string[];
  row: "above" | "below";
  planned?: boolean;
  mesh?: boolean;
}

export const timelineData: timelineData[] = [
  {
    period: "H1 2024",
    title: "",
    items: [
      "Assembled Core Team specializing in post-quantum blockchain security",
      "Winner of DMCC Best Web3 Startup of 2024",
      "DMCC Registration - Sponsored by Bybit, Winner of DMCC Best Web3 Startup of 2024 ",
      `Launched The <a href="https://quantummindspodcast.com/" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      Quantum Minds Podcast
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>
    <div class="flex flex-row  justify-start items-center mt-[13px] text-p4 gap-x-2 px-2 bg-[#C3C3C31A] rounded-[5px] w-fit" style="padding-left: 5px; padding-right: 10px;"><span class="flex-none w-[28px] h-[28px]"><image src="/images/about/playvideo.png" alt="Play Video" width="18" height="18"> </span><span class="basis-[80%]">500+ watch hours in 35+ countries</span></div>`,
      "Secured global partnership with PwC for enterprise blockchain solutions delivery",
    ],
    row: "below",
    mesh: true,
  },
  {
    period: "H2 2024",
    title: "",
    items: [
      "Grew community to <span class='font-bold'>50k+</span>",
      "Established our Headquarters in Switzerland",
      `<p class="font-semibold">
    Quantum-secure 
    <a href="#" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      PoW Testnet
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>
    
  </p>
  `,
      "R&D of quantum safe wallet (Qsafe)",
      "Secured Seed Round investment",
    ],
    row: "above",
  },
  {
    period: "Q1 2025",
    title: "",
    items: [
      `<span class="font-semibold">Quantum-secure</span>
      <a href="#" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      PoW Mainnet live
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>`,
      `<span class="font-semibold">Global Roadshow</span> announced
      <div class="flex flex-row  justify-start items-center gap-x-2 gap-y-2">
      <div class="flex flex-row  justify-start items-center mt-[13px] text-p4 gap-x-2 px-2  bg-[#C3C3C31A] rounded-[5px] w-fit" style="padding-left: 5px; padding-right: 10px;"><span class="flex-none w-[28px] h-[28px]"><image src="/images/about/global.png" alt="Global" width="18" height="18"> </span><span class="basis-[80%]">30+ Countries</span></div>
      <div class="flex flex-row  justify-start items-center mt-[13px] text-p4 gap-x-2 px-2 bg-[#C3C3C31A] rounded-[5px] w-fit" style="padding-left: 5px; padding-right: 10px;"><span class="flex-none w-[28px] h-[28px]"><image src="/images/about/flag.png" alt="Flag" width="18" height="18"> </span><span class="basis-[80%]">300+ Events</span></div>
      </div>`,
      "Developed EVM compatibility",
      "Secured strategic round investment",
    ],
    row: "below",
  },
  {
    period: "Q2 2025",
    title: "",
    items: [
      `<a href="https://www.animocabrands.com/" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      Animoca Brands
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a> invests in Quranium`,
      `Launched <a href="#" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      PoS Convergence Layer Testnet
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>`,
      `Released <a href="https://www.linkedin.com/events/theuncrackableconversation-virt7353064349961252867/theater/" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      The Uncrackable Conversation
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>
    <div class="flex flex-row  justify-start items-center mt-[13px] text-p4 gap-x-2 px-2 bg-[#C3C3C31A] rounded-[5px] w-fit" style="padding-left: 5px; padding-right: 10px;"><span class="flex-none w-[28px] h-[28px]"><image src="/images/about/userspeak.png" alt="User Speak" width="18" height="18"> </span><span class="basis-[80%]">150k Reach</span></div>`,
      `Launched <a href="https://www.qsafewallet.com/" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      QSafe Wallet
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>`,
      `Launched <a href="https://www.qremix.org/" target="_blank" style="position:relative;padding-bottom:5px;display:inline-block;">
      QRemix AI Builder
      <span style="content:'';position:absolute;left:0;bottom:5px;height:1px;width:100%;background:#ffffff85;"></span>
    </a>`,
      `<span class="font-semibold">100+</span> partnership secured`,
      `<span class="font-semibold">400k+</span> Gamer Alliance Partnership Signed`,
    ],
    row: "above",
  },
  {
    period: "Q3 2025",
    title: "",
    items: [
      "QRNScan Mainnet",
      "NFT Module Activated",
      "Grant Program Launch",
      "Launchpad Public Sales",
      "TGE & Exchange Listings",
      "Q-DEX Mainnet and staking",
      "100+ AI Games Market Launch",
      "QSafe Wallet Staking Integration",
      "Mainnet Launch of Quranium Layer 1",
    ],
    row: "below",
    planned: true,
  },
  {
    period: "Q4 2025",
    title: "",
    items: [
      "DeQUIP Incubator launch",
      "Cross-chain Bridge Alpha",
      "Bounty Campaigns Launch",
      "Quranium SDKs & Dev Tools",
      "Liquid Staking dApp Launch",
      "Quantum-secure BTC reserve protocol",
      "Agentic AI Infrastructure Launch - QRemix v2.0",
      "QMoney Market dApp Launch - Lending/Borrowing",
    ],
    row: "above",
    planned: true,
  },
  {
    period: "H1 2026",
    title: "",
    items: ["Launch AI Agent ID verification protocol", "QIP Community Governance Portal Launch"],
    row: "below",
    planned: true,
  },
];
