import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are the Apollo AI Assistant for Apollo Green Solutions (apollo-gs.com).
Your goal is to provide accurate, professional, and knowledgeable answers to enterprise energy managers, plant operators, ESG auditors, and prospective B2B clients.

LANGUAGE INSTRUCTIONS:
- If the user writes in German (Deutsch), answer fluently and professionally in German.
- If the user writes in English, answer in English.
- Always remain concise, structured, and helpful.

COMPANY IDENTITY & HISTORY:
- Apollo Green Solutions was founded in January 2023 by Rafail Kasapis in Germany and Greece, with ongoing operations in both regions.
- Origin: What started as a PV installation company pivoted quickly to become an integrated consultancy, software house, and industrial hardware manufacturer.
- Philosophy (The Apollo Duality): In Greek mythology, Apollo ruled two domains: the blazing energy of the sun and the clear-sighted gift of prophecy. Apollo GS reflects this: "The Sun" represents physical energy hardware (analyzers, gateways, generation), and "The Prophecy" represents digital foresight (AI load forecasting, peak shaving, predictive maintenance).
- Mission: To make sustainable and efficient energy management accessible and actionable for every enterprise, bridging the gap between physical infrastructure and digital software.

CORE TEAM:
- Rafail Kasapis: Founder / CEO
- Goetz Geilhardt: Product Manager
- Alexandra Xanthopoulou: Head Operations
- Tanuj Adhikari: Head Developer
- Ahmed Labidi: Electrical Engineer

KEY PRODUCTS & SOLUTIONS:
1. Apollo Gateway Pro Gen 3: Industrial IoT Edge Hub. Quad-core ARM, IP67 enclosure, 32GB local eMMC buffer (30-day offline telemetry guarantee), dual-SIM 4G/LTE failover, RS485, Modbus, BACnet, CAN, LoRaWAN.
2. Apollo Pulse Analyzer: Class 0.2S certified 3-phase revenue-grade power quality analyzer. 256 samples/cycle (12.8 kHz), 63rd harmonic analysis, reactive penalty prevention, DIN-rail mount.
3. Apollo GridOS: Cloud SCADA & energy analytics SaaS. Ingests 500k+ events/sec with <250ms latency, multi-tenant hierarchy (Portfolio > Campus > Building > Circuit), dynamic tariff simulation.
4. Apollo OptiStorage: AI-driven Battery Energy Storage System (BESS) orchestrator. Dynamic peak shaving, 48-hour rolling prediction, degradation-aware dispatch saving up to 35% on peak tariffs.
5. Apollo Predictive Sentry: Wireless triaxial vibration & thermal sensor for industrial motors, transformers, and pumps. Detects bearing wear and rotor unbalance up to 45 days before catastrophic failure.
6. Apollo Carbon Sentinel: Automated Scope 1, 2, 3 carbon accounting. Matches hourly energy with grid carbon intensity factors for EU CSRD and GHG Protocol compliance.

CONTACT & OFFICES:
- Germany Office: Stuttgart Technology Center (+49 711 9253 8100)
- Greece Office: Athens Engineering Hub
- Email: info@apollo-gs.com
- Bookings: Direct consultation scheduling available at apollo-gs.com/book-a-meeting or /contact.

TONE & GUIDELINES:
- Be concise, technical yet accessible, professional, and encouraging.
- Format responses cleanly with Markdown (bullet points, bold text).
- Always guide users to book a pilot demo or review the Products page for in-depth datasheets.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // If an OpenAI API key is configured, use Vercel AI SDK with OpenAI
    if (process.env.OPENAI_API_KEY) {
      const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const result = streamText({
        model: openai("gpt-4o-mini"),
        system: SYSTEM_PROMPT,
        messages,
      });

      return result.toTextStreamResponse();
    }

    // Zero-config intelligent streaming fallback for evaluation & offline/keyless environments
    const fallbackResponse = generateApolloFallbackResponse(lastUserMessage);

    const encoder = new TextEncoder();
    const words = fallbackResponse.split(" ");

    const stream = new ReadableStream({
      async start(controller) {
        // Stream text in small chunks to simulate real-time AI generation
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? "" : " ") + words[i];
          controller.enqueue(encoder.encode(chunk));
          await new Promise((r) => setTimeout(r, 15));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function generateApolloFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  const isGerman =
    /\b(ist|wer|wie|was|der|die|das|und|fuer|für|gründer|gruender|philosophie|sonne|prophezeiung|speicher|kontakt|deutsch|hallo|guten|morgen|tag|abend)\b/i.test(q);

  if (q.includes("founder") || q.includes("who founded") || q.includes("rafail") || q.includes("gründ") || q.includes("gruend")) {
    if (isGerman) {
      return "Apollo Green Solutions wurde im **Januar 2023 von Rafail Kasapis** in Deutschland und Griechenland gegründet. Ursprünglich als Photovoltaik-Installationsbetrieb gestartet, transformierte Rafail das Unternehmen zu einem integrierten Industrie-Hardwarehersteller und Software-Entwickler für intelligentes Energiemanagement in europäischen Industrieunternehmen.";
    }
    return "Apollo Green Solutions was founded in **January 2023 by Rafail Kasapis** across Germany and Greece. Originating from a high-efficiency PV installation enterprise, Rafail pivoted the company into a full-scale industrial hardware and software house, bringing intelligent foresight to European enterprise energy grids.";
  }

  if (q.includes("duality") || q.includes("sun") || q.includes("prophecy") || q.includes("philosophie") || q.includes("mythologie") || q.includes("sonne")) {
    if (isGerman) {
      return "Die Apollo-Philosophie stammt aus der antiken griechischen Mythologie: **Apollo herrschte über zwei Bereiche: die strahlende Kraft der Sonne und die Gabe der klarsichtigen Prophezeiung.**\n\nBei Apollo Green Solutions spiegelt sich dies wider:\n- **Die Sonne (Physische Energie):** Hochpräzise Klasse-0.2S-Leistungsanalysatoren und Edge-Gateways zur exakten Erfassung.\n- **Die Prophezeiung (Digitale Vorausschau):** KI-Algorithmen und prädiktive Telemetrie für vorausschauendes Peak Shaving und Maschinenschutz.";
    }
    return "The Apollo philosophy is inspired by ancient Greek mythology: **Apollo was celebrated as the god of two powerful domains: the blazing energy of the sun and the clear-sighted gift of prophecy.**\n\nAt Apollo Green Solutions, we built our entire platform around this duality:\n- **The Sun (Physical Power):** High-precision Class 0.2S power analyzers and edge gateways that measure energy flow.\n- **The Prophecy (Digital Foresight):** AI algorithms and predictive telemetry that forecast grid demands, automate peak shaving, and preempt machinery failure.";
  }

  if (q.includes("gateway") || q.includes("hardware") || q.includes("pulse") || q.includes("messung")) {
    if (isGerman) {
      return "Unsere industrielle Hardware-Serie umfasst:\n\n1. **Apollo Gateway Pro Gen 3:** Industrieller IoT-Edge-Hub mit Quad-Core-ARM-Prozessor, IP67-Aluminiumgehäuse, Dual-SIM-LTE-Failover und 30 Tagen lokaler Offline-Pufferung (Modbus, BACnet, CAN, LoRaWAN).\n2. **Apollo Pulse Analyzer:** Klasse 0.2S zertifizierter 3-Phasen-Netzanalysator mit 256 Abtastungen/Zyklus (bis zur 63. Harmonischen) zur Vermeidung von Blindstrom-Strafgebühren.";
    }
    return "Our core hardware lineup features:\n\n1. **Apollo Gateway Pro Gen 3:** Industrial IoT edge hub powered by a Quad-Core ARM CPU, IP67 aluminum chassis, dual-SIM 4G/LTE failover, and a 30-day offline buffer with Modbus, BACnet, and CAN support.\n2. **Apollo Pulse Analyzer:** Revenue-grade Class 0.2S 3-phase power analyzer with 256 samples/cycle capturing up to the 63rd harmonic to eliminate reactive power utility fines.";
  }

  if (q.includes("gridos") || q.includes("software") || q.includes("cloud") || q.includes("plattform")) {
    if (isGerman) {
      return "**Apollo GridOS** ist unser cloudbasiertes Energiebetriebssystem. Es verarbeitet über 500.000 Datenpunkte pro Sekunde mit weniger als 250 ms Latenz:\n- Hierarchische Mehrmandantenstruktur (Portfolio > Campus > Gebäude > Stromkreis)\n- Dynamische Day-Ahead-Strompreise und Tarifoptimierung\n- Automatische Alarme bei Netzanomalien via E-Mail, SMS und Webhooks\n- Automatisierte Kostenverteilung und Sub-Billing-Berichte.";
    }
    return "**Apollo GridOS** is our cloud-native energy operating system. It ingests sub-second telemetry from thousands of sensors with less than 250ms latency. It provides:\n- Hierarchical multi-site telemetry (Portfolio > Campus > Circuit)\n- Dynamic day-ahead electricity spot market tariff tracking\n- Real-time fault and anomaly alerts via email, SMS, and Webhooks\n- Automated sub-billing and cost-allocation ledgers.";
  }

  if (q.includes("battery") || q.includes("bess") || q.includes("storage") || q.includes("peak") || q.includes("speicher")) {
    if (isGerman) {
      return "**Apollo OptiStorage** steuert gewerbliche Batteriespeicher (BESS) mit prädiktiver KI. Durch Analyse von Wetterprognosen, Produktionsplänen und dynamischen Tarifen lädt es in Niedrigpreiszeiten und entlädt während Spitzenlastfenstern. Das senkt Leistungsentgelte um bis zu **35%** bei gleichzeitiger batterieschonender Lastführung.";
    }
    return "**Apollo OptiStorage** is our AI-driven Battery Energy Storage System (BESS) orchestrator. By combining weather forecasts, production schedules, and dynamic tariffs, it automatically charges during off-peak windows and discharges during peak hours. This cuts high-demand capacity charges by up to **35%** while extending battery cell lifespan through degradation-aware algorithms.";
  }

  if (q.includes("team") || q.includes("who is") || q.includes("people") || q.includes("mitarbeiter")) {
    if (isGerman) {
      return "Das Kernteam von Apollo Green Solutions:\n\n- **Rafail Kasapis** — Gründer & CEO\n- **Goetz Geilhardt** — Produktmanager\n- **Alexandra Xanthopoulou** — Head of Operations\n- **Tanuj Adhikari** — Chefentwickler\n- **Ahmed Labidi** — Elektroingenieur\n\nUnser Team operiert aus Standorten in Stuttgart (Deutschland) und Athen (Griechenland).";
    }
    return "Meet the leadership team driving Apollo Green Solutions:\n\n- **Rafail Kasapis** — Founder / CEO\n- **Goetz Geilhardt** — Product Manager\n- **Alexandra Xanthopoulou** — Head Operations\n- **Tanuj Adhikari** — Head Developer\n- **Ahmed Labidi** — Electrical Engineer\n\nOur cross-functional team operates across Stuttgart (Germany) and Athens (Greece).";
  }

  if (q.includes("esg") || q.includes("carbon") || q.includes("co2") || q.includes("csrd")) {
    if (isGerman) {
      return "**Apollo Carbon Sentinel** verknüpft Stromverbräuche automatisch mit stündlichen Emissionsfaktoren des lokalen Stromnetzes. Es erstellt revisionssichere Bilanzen für Scope 1, 2 und 3 nach EU-CSRD- und GHG-Protocol-Standards.";
    }
    return "**Apollo Carbon Sentinel** translates electrical consumption directly into verified CO₂ equivalents compliant with EU CSRD (ESRS E1) and the GHG Protocol. It automatically accounts for Scope 1, 2, and 3 emissions with an hourly location-based audit ledger ready for third-party inspection.";
  }

  if (q.includes("contact") || q.includes("meeting") || q.includes("demo") || q.includes("kontakt") || q.includes("termin") || q.includes("preis") || q.includes("price")) {
    if (isGerman) {
      return "Sie können ein technisches Beratungsgespräch oder ein Vor-Ort-Hardware-Pilotprojekt direkt über unsere [Kontaktseite](/contact) anfragen. Alternativ erreichen Sie unseren Standort Stuttgart unter **+49 711 9253 8100** oder per E-Mail an **info@apollo-gs.com**.";
    }
    return "You can schedule a direct engineering consultation or request an on-site hardware pilot through our [Contact Page](/contact). Alternatively, reach our German hub in Stuttgart at **+49 711 9253 8100** or email **info@apollo-gs.com**.";
  }

  if (isGerman) {
    return "Willkommen bei **Apollo Green Solutions**! Wir verbinden industrielle Energie-Hardware mit intelligenter KI-Software für maximale Effizienz.\n\nGerne informiere ich Sie über:\n- **Apollo Gateway Pro & Pulse Analyzer** (Klasse-0.2S-Hardware)\n- **Apollo GridOS & OptiStorage** (BESS-Peak-Shaving)\n- **Prädiktive Motor-Telemetrie** (Vibrations- & Wärmesensorik)\n- **Unternehmensgeschichte & Team** (Gegründet 2023 von Rafail Kasapis)\n\nWie kann ich Sie heute unterstützen?";
  }

  return "Welcome to **Apollo Green Solutions**! We bridge physical electrical infrastructure with AI intelligence to make energy visible, actionable, and sustainable.\n\nI can provide technical details on:\n- **Apollo Gateway Pro & Pulse Analyzer** (Class 0.2S hardware)\n- **Apollo GridOS & OptiStorage** (BESS peak shaving software)\n- **Predictive Motor Sentry** (Vibration & thermal AI)\n- **Our Story & Team** (Founded in 2023 by Rafail Kasapis)\n\nHow can I assist your facility's energy requirements today?";
}
