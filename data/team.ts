export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  focus: string[];
  linkedinUrl: string;
  avatarInitials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rafail Kasapis",
    role: "Founder / CEO",
    department: "Executive Leadership",
    bio: "Founded Apollo Green Solutions in January 2023 across Germany and Greece. Pioneered the transition from photovoltaic installations into an integrated industrial hardware and software house, bringing intelligent foresight to enterprise energy grids.",
    focus: ["Corporate Strategy", "Hardware & Software Vision", "European Energy Transition", "B2B Partnerships"],
    linkedinUrl: "https://www.linkedin.com/company/apollo-gs/posts/?feedView=all",
    avatarInitials: "RK"
  },
  {
    name: "Goetz Geilhardt",
    role: "Product Manager",
    department: "Product & Strategy",
    bio: "Drives product roadmaps for Apollo's IoT edge gateways and cloud-native GridOS platform, ensuring that complex industrial energy workflows translate into intuitive, high-impact operator tools.",
    focus: ["Product Roadmap", "SCADA Architecture", "UI/UX for Energy Managers", "Market Feasibility"],
    linkedinUrl: "https://www.linkedin.com/company/apollo-gs/posts/?feedView=all",
    avatarInitials: "GG"
  },
  {
    name: "Alexandra Xanthopoulou",
    role: "Head Operations",
    department: "Operations & Scale",
    bio: "Directs Apollo's cross-border operations between Germany and Greece, streamlining hardware manufacturing supply chains, pilot deployments, and field engineering support for enterprise clients.",
    focus: ["Cross-Border Logistics", "Operational Excellence", "Field Deployment", "Client Success"],
    linkedinUrl: "https://www.linkedin.com/company/apollo-gs/posts/?feedView=all",
    avatarInitials: "AX"
  },
  {
    name: "Tanuj Adhikari",
    role: "Head Developer",
    department: "Software Engineering",
    bio: "Leads the core engineering team building Apollo GridOS, scalable time-series pipelines, machine learning anomaly detectors, and sub-second telemetry ingestion backends.",
    focus: ["Distributed Systems", "AI & Forecasting Algorithms", "High-Throughput Ingestion", "Cloud Infrastructure"],
    linkedinUrl: "https://www.linkedin.com/company/apollo-gs/posts/?feedView=all",
    avatarInitials: "TA"
  },
  {
    name: "Ahmed Labidi",
    role: "Electrical Engineer",
    department: "Hardware & R&D",
    bio: "Specializes in high-precision power electronics, Class 0.2S sub-metering circuit design, industrial electromagnetic compatibility (EMC), and edge gateway field commissioning.",
    focus: ["Power Systems & Metering", "Class 0.2S Calibration", "PCB & Firmware Design", "IEC Substation Standards"],
    linkedinUrl: "https://www.linkedin.com/company/apollo-gs/posts/?feedView=all",
    avatarInitials: "AL"
  }
];

export const companyTimeline = [
  {
    year: "January 2023",
    title: "Founding in Germany & Greece",
    description: "Apollo Green Solutions is established by Rafail Kasapis, launching initial operations focused on commercial and industrial photovoltaic installations."
  },
  {
    year: "Late 2023",
    title: "Strategic Pivot to Hardware & Software",
    description: "Recognizing that raw energy generation needs intelligent data foresight, Apollo pivots into an integrated hardware manufacturer and software engineering house."
  },
  {
    year: "2024",
    title: "Launch of Apollo Gateway & Metering Line",
    description: "Deployment of first-generation industrial IoT gateways and high-precision power quality analyzers across manufacturing facilities in Central and Southern Europe."
  },
  {
    year: "2025",
    title: "Apollo GridOS & AI Predictive Sentry",
    description: "Release of the cloud-native GridOS platform, incorporating machine-learning battery storage orchestration and vibration anomaly detection."
  },
  {
    year: "2026 & Beyond",
    title: "European Energy Grid Modernization",
    description: "Scaling enterprise deployments across industrial parks, municipal utilities, and B2B corporate enterprises driving the European net-zero transition."
  }
];
