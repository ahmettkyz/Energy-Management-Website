export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'hardware' | 'software' | 'storage_ai';
  categoryLabel: string;
  badge: string;
  description: string;
  fullOverview: string;
  iconName: 'Cpu' | 'Activity' | 'Server' | 'BatteryCharging' | 'ShieldAlert' | 'FileText';
  specs: ProductSpec[];
  highlights: string[];
  protocols?: string[];
  certifications?: string[];
  targetAudience: string;
}

export const products: Product[] = [
  {
    id: "apollo-gateway-pro",
    name: "Apollo Gateway Pro Gen 3",
    tagline: "Industrial IoT Edge Hub with Multi-Protocol Telemetry",
    category: "hardware",
    categoryLabel: "Hardware & Edge",
    badge: "Flagship Edge Hardware",
    description: "Ultra-resilient edge gateway designed for substations and industrial facilities, enabling sub-second telemetry aggregation and edge AI inference.",
    fullOverview: "The Apollo Gateway Pro Gen 3 connects physical electrical transformers, circuit breakers, PV inverters, and meters directly to Apollo GridOS. Featuring hardware-grade isolation, dual SIM 4G/LTE failover, and local SQLite data buffering, it ensures zero telemetry loss even during total network disruptions.",
    iconName: "Cpu",
    specs: [
      { name: "Processor", value: "Quad-Core ARM Cortex-A53 @ 1.4 GHz" },
      { name: "Local Storage", value: "32GB Industrial eMMC with wear leveling (30-day offline buffer)" },
      { name: "Operating Temp", value: "-40°C to +85°C Industrial Range" },
      { name: "Ingress Protection", value: "IP67 Die-cast Aluminum Enclosure" },
      { name: "Power Supply", value: "9-36V DC redundant input with PoE (802.3at)" },
      { name: "Connectivity", value: "Dual GbE LAN, Dual-SIM 4G/LTE, RS485 (x3), CAN bus, LoRaWAN optional" },
    ],
    highlights: [
      "Sub-second sampling of up to 256 Modbus registers",
      "Local edge machine learning for instant anomaly alerts",
      "Hardware secure element (TPM 2.0) with TLS 1.3 encryption",
      "DIN-rail or wall-mount form factor"
    ],
    protocols: ["Modbus RTU/TCP", "BACnet IP", "CAN 2.0B", "IEC 61850", "MQTT/Sparkplug B"],
    certifications: ["CE", "UL 61010-1", "IEC 62443-4-2 Cyber Security", "RoHS"],
    targetAudience: "Industrial plants, substations, utility microgrids, manufacturing factories"
  },
  {
    id: "apollo-pulse-analyzer",
    name: "Apollo Pulse Analyzer",
    tagline: "Class 0.2S High-Precision 3-Phase Power Meter",
    category: "hardware",
    categoryLabel: "Hardware & Metering",
    badge: "Sub-Metering Standard",
    description: "Revenue-grade 3-phase multi-channel power analyzer capturing harmonics up to the 63rd order and millisecond power quality anomalies.",
    fullOverview: "Designed to meet stringent IEC and ANSI utility standards, the Apollo Pulse Analyzer delivers certified Class 0.2S active energy measurement. It uncovers power factor dips, voltage sags, harmonics, and intermittent line transients that damage sensitive machinery and trigger heavy utility penalties.",
    iconName: "Activity",
    specs: [
      { name: "Measurement Class", value: "Class 0.2S (IEC 62053-22), Class 0.2 (ANSI C12.20)" },
      { name: "Voltage Inputs", value: "Up to 690V AC Line-to-Line (direct), PT compatible up to 500kV" },
      { name: "Current Inputs", value: "1A / 5A CT inputs or Rogowski coils (up to 6000A)" },
      { name: "Harmonics Analysis", value: "Up to 63rd harmonic with THD/TDD breakdown" },
      { name: "Sampling Rate", value: "256 samples per cycle (12.8 kHz @ 50Hz)" },
      { name: "Display", value: "Backlit TFT color LCD with waveform snapshot display" }
    ],
    highlights: [
      "Real-time reactive power penalty prevention",
      "Automatic detection of sag, swell, flicker, and transient spikes",
      "Four-quadrant energy measurement (import/export active/reactive)",
      "Continuous logging of waveforms during electrical faults"
    ],
    protocols: ["Modbus TCP/RTU", "DNP3", "IEC 60870-5-104", "Ethernet/IP"],
    certifications: ["MID Approved", "IEC 61000-4-30 Class A", "UL Listed"],
    targetAudience: "Energy managers, heavy machinery operators, commercial real estate portfolios"
  },
  {
    id: "apollo-gridos",
    name: "Apollo GridOS Platform",
    tagline: "Enterprise Cloud SCADA & Real-Time Energy SaaS",
    category: "software",
    categoryLabel: "Cloud Software",
    badge: "Cloud AI Platform",
    description: "Next-generation energy operating system bringing live telemetry, sub-meter hierarchies, multi-tenant access, and automated cost optimization.",
    fullOverview: "Apollo GridOS is the nerve center of modern facility intelligence. Built as a high-throughput, real-time distributed platform, it ingests telemetry from thousands of gateways in sub-seconds. Energy managers can drill down from an international portfolio to a single circuit breaker on a manufacturing line.",
    iconName: "Server",
    specs: [
      { name: "Ingestion Capacity", value: "Over 500,000 telemetry events per second per cluster" },
      { name: "Latency", value: "< 250ms end-to-end telemetry ingestion to dashboard" },
      { name: "Data Retention", value: "10-year granular historical time-series storage" },
      { name: "Deployment", value: "Managed European Cloud (Frankfurt/Athens) or On-Premise Kubernetes" },
      { name: "SLA", value: "99.98% availability guarantee with 24/7 telemetry monitoring" }
    ],
    highlights: [
      "Hierarchical facility mapping: Portfolio > Campus > Building > Floor > Circuit",
      "Configurable alert engine via SMS, WhatsApp, Webhooks, and Email",
      "Dynamic tariff modeling with real-time day-ahead spot market feeds",
      "Automated PDF and Excel utility allocation billing"
    ],
    protocols: ["REST API", "WebSocket Feeds", "GraphQL", "MQTT Ingress", "Kafka Streams"],
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Certified"],
    targetAudience: "Chief Sustainability Officers, Facility Directors, Plant Managers, ESG Auditors"
  },
  {
    id: "apollo-optistorage",
    name: "Apollo OptiStorage Engine",
    tagline: "AI-Powered Battery Energy Storage (BESS) Orchestrator",
    category: "storage_ai",
    categoryLabel: "Storage & AI",
    badge: "AI Optimization",
    description: "Maximizes the return on investment of on-site Battery Energy Storage Systems (BESS) through machine learning peak shaving and spot market arbitrage.",
    fullOverview: "OptiStorage blends weather forecasts, production schedules, historical load profiles, and day-ahead electricity prices to formulate optimal microgrid charge and discharge cycles. It prolongs battery cell lifespan while cutting peak demand charges by up to 40%.",
    iconName: "BatteryCharging",
    specs: [
      { name: "Supported Chemistries", value: "LFP (LiFePO4), NMC, Flow Batteries, Sodium-Ion" },
      { name: "Control Response Time", value: "< 20ms microgrid islanding and dispatch trigger" },
      { name: "Optimization Horizon", value: "Dynamic 48-hour rolling prediction window" },
      { name: "Integration", value: "Compatible with Tesla Megapack, BYD, Sungrow, Huawei, and CATL" }
    ],
    highlights: [
      "Dynamic peak shaving to prevent costly capacity threshold breaches",
      "Day-ahead and intra-day electricity market arbitrage",
      "Degradation-aware dispatch algorithms to extend BESS warranty life by 20%",
      "Seamless solar self-consumption maximization"
    ],
    protocols: ["SunSpec Modbus", "CANopen", "OpenADR 2.0b", "IEEE 2030.5"],
    certifications: ["UL 9540A Verified Software Control", "VDE-AR-N 4110 Grid Compliance"],
    targetAudience: "BESS owners, renewable IPPs, high-peak industrial consumers"
  },
  {
    id: "apollo-predictive-sentry",
    name: "Apollo Predictive Sentry",
    tagline: "Industrial Motor & Transformer Anomaly Detector",
    category: "storage_ai",
    categoryLabel: "AI Anomaly Detection",
    badge: "Predictive AI",
    description: "Combines triaxial wireless vibration, ultrasound, and thermal sensors with edge AI to detect machinery failure weeks before breakdown.",
    fullOverview: "Unplanned downtime costs heavy industries tens of thousands of dollars every hour. Apollo Predictive Sentry continuously samples mechanical vibration frequencies, motor bearing friction, and winding temperatures, using machine learning to detect bearing fluting, cavitation, and rotor unbalance.",
    iconName: "ShieldAlert",
    specs: [
      { name: "Vibration Sensor", value: "Triaxial MEMS accelerometer, ±16g, 0.1 Hz to 10 kHz bandwidth" },
      { name: "Temperature Range", value: "-40°C to +125°C contact thermopile" },
      { name: "Wireless Range", value: "Up to 500m Line-of-Sight via Bluetooth 5.2 Mesh & Wirepas" },
      { name: "Battery Life", value: "Up to 5 years (field-replaceable lithium battery)" }
    ],
    highlights: [
      "Automated ISO 10816-3 vibration severity classification",
      "Early warning up to 45 days prior to bearing seizure",
      "Zero cabling installation with magnetic mount base",
      "Direct integration into Apollo GridOS maintenance work-orders"
    ],
    protocols: ["BLE 5.2 Mesh", "LoRaWAN 1.0.4", "Apollo Gateway Sync"],
    certifications: ["ATEX Zone 2 / IECEx Certified for Hazardous Environments"],
    targetAudience: "Maintenance superintendents, pump stations, HVAC engineers, refinery technicians"
  },
  {
    id: "apollo-carbon-sentinel",
    name: "Apollo Carbon Sentinel",
    tagline: "Automated Scope 1, 2 & 3 ESG Carbon Accounting Suite",
    category: "software",
    categoryLabel: "ESG & Compliance",
    badge: "Audit-Ready ESG",
    description: "Real-time carbon emissions engine that translates raw kilowatt-hours into verified CO₂ equivalents compliant with EU CSRD and GHG protocols.",
    fullOverview: "Apollo Carbon Sentinel eliminates tedious manual spreadsheets. By tying directly to sub-meters and fuel flow sensors, the platform applies localized grid carbon-intensity factors in real-time. Organizations can generate third-party audit-ready sustainability reports in seconds.",
    iconName: "FileText",
    specs: [
      { name: "Standards Compliance", value: "GHG Protocol Corporate Standard, EU CSRD (ESRS E1), ISO 14064" },
      { name: "Emission Factors", value: "Pre-integrated IEA, DEFRA, EPA, and eGRID hourly emission databases" },
      { name: "Audit Trail", value: "Cryptographically timestamped telemetry log for auditor verification" },
      { name: "Export Formats", value: "PDF Executive Brief, XBRL CSRD format, CSV/Excel raw ledger" }
    ],
    highlights: [
      "Hourly location-based and market-based Scope 2 carbon accounting",
      "Scope 1 integration for natural gas, diesel backup generators, and fleet fuels",
      "Scope 3 upstream supply chain supplier energy data portals",
      "Carbon budget forecasting and net-zero milestone tracking"
    ],
    protocols: ["Open Sustainability API", "SAP / Oracle ERP Connectors"],
    certifications: ["GHG Protocol Aligned", "EU Taxonomy Ready"],
    targetAudience: "Chief Sustainability Officers (CSO), compliance teams, corporate ESG committees"
  }
];
