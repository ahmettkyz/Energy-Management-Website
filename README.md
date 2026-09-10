# Apollo Green Solutions — Intelligent Energy Management & Industrial IoT Platform

> **Live Production URL:** [[https://apollo-energy-web.vercel.app](https://apollo-energy-web.vercel.app)](https://energy-management-website-bice.vercel.app/)

A modern, high-performance B2B energy management web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and the **Vercel AI SDK**.

The design is tailored for a B2B industrial audience: clean light backgrounds (`#f8faf9`, `bg-white`), organic rounded geometry (`rounded-2xl`, `rounded-3xl`), curated green-toned brand palette (`#16a34a`, `#22c55e`, emerald/teal accents), English default language with seamless German toggle, and official company content directly from [Apollo Green Solutions](https://www.apollo-gs.com/about-us).

---

## Table of Contents
1. [Overview & Core Value](#overview--core-value)
2. [Visual Design & Brand Identity](#visual-design--brand-identity)
3. [Page Structure & Architecture](#page-structure--architecture)
4. [Bilingual AI Chatbot (Vercel AI SDK)](#bilingual-ai-chatbot-vercel-ai-sdk)
5. [Tech Stack](#tech-stack)
6. [How to Run Locally](#how-to-run-locally)
7. [Production Deployment Guide](#production-deployment-guide)
   - [Option A: Vercel (Recommended)](#option-a-vercel-recommended)
   - [Option B: Docker Container](#option-b-docker-container)
   - [Option C: Standalone Node.js Server](#option-c-standalone-nodejs-server)
8. [Environment Variables](#environment-variables)
9. [Evaluation Checklist](#evaluation-checklist)

---

## Overview & Core Value

Apollo Green Solutions bridges the gap between physical electrical infrastructure and digital AI intelligence. Founded in **January 2023 by Rafail Kasapis** across Germany and Greece, the platform embodies the ancient Greek duality of Apollo: **The Sun** (raw physical energy generation & metering hardware) and **The Prophecy** (deep data foresight, AI load forecasting, and predictive maintenance).

### Key Capabilities
- **Home Page (`/`)**:
  - Industrial clean energy hero backdrop (`/hero-bg.jpg`), high-contrast typography, green badge, white pill CTA button, and 3 feature pillars (**Messen - Überwachen - Steuern** / **Measure - Monitor - Manage**).
  - Company Value Proposition based on the Apollo Sun & Prophecy duality.
  - Interactive **Live Telemetry Console**: Real-time interactive power flow (Solar PV generation, Facility Load, BESS Battery State of Charge, and Grid Import), predictive tariff peak shaving, power quality harmonics, and automated CSRD CO₂ accounting.
  - Key product feature breakdown and social proof metrics (99.98% SLA, 32% bill reduction, 1,400+ nodes).
  - High-conversion consultation call to action.
- **Products Page (`/products`)**:
  - Catalog of 6 industrial energy management products:
    1. **Apollo Gateway Pro Gen 3** (Quad-Core ARM, IP67 aluminum, dual-SIM 4G/LTE, 30-day offline buffer, Modbus/BACnet/CAN).
    2. **Apollo Pulse Analyzer** (Class 0.2S revenue-grade 3-phase meter, 256 samples/cycle, 63rd harmonic analysis).
    3. **Apollo GridOS Platform** (Cloud SCADA & AI energy operating system SaaS, <250ms latency, dynamic spot tariffs).
    4. **Apollo OptiStorage Engine** (BESS battery energy storage AI orchestrator, dynamic peak shaving, tariff arbitrage).
    5. **Predictive Motor Sentry** (ATEX-certified triaxial vibration & thermal sensor for predictive motor maintenance).
    6. **Apollo Carbon Sentinel** (Scope 1, 2, 3 carbon accounting suite compliant with EU CSRD and GHG protocols).
  - Category filter tabs (All, Hardware & Metering, Cloud Software & SCADA, Storage & AI).
  - Interactive **Technical Specification Modal** with full parameter tables, downloadable datasheet simulation, and quote request.
  - Interoperability protocol comparison matrix.
- **About Us Page (`/about`)**:
  - Direct integration of verified information from `https://www.apollo-gs.com/about-us`:
    - Founding story (January 2023 by Rafail Kasapis in Germany and Greece).
    - Philosophy of Sun and Prophecy.
    - Bridging the physical and digital.
    - Official team profiles with roles, bios, and LinkedIn links:
      - **Rafail Kasapis**: Founder / CEO
      - **Goetz Geilhardt**: Product Manager
      - **Alexandra Xanthopoulou**: Head Operations
      - **Tanuj Adhikari**: Head Developer
      - **Ahmed Labidi**: Electrical Engineer
    - Interactive Apollo journey timeline (2023–2026+).
- **Contact Page (`/contact`)**:
  - Working, validated contact form with real-time feedback (Full Name, Work Email, Company, Solution, Message).
  - Celebratory confetti micro-interaction on submission.
  - Dual European headquarters (Stuttgart, Germany & Athens, Greece) with phone, email, and direct booking links.
  - Direct link to `apollo-gs.com/book-a-meeting`.

---

## Visual Design & Brand Identity

- **Light Aesthetic**: Clean light backgrounds (`#f8faf9`, `bg-white`) designed for executive readability.
- **Curated Green Palette**: Aligned with Apollo Green Solutions (`#16a34a`, `#22c55e`, emerald and teal accents).
- **Organic Geometry**: Soft `rounded-2xl` and `rounded-3xl` radii, eliminating AI-style sharp box edges.
- **Modern Typography**: Inter font loaded via `next/font/google` for optimal, zero-layout-shift B2B legibility.
- **Intentional Contrast Anchors**: Real-time Telemetry Console and Footer retain dark contrast (`bg-gray-900`) for visual dynamism.

---

## Bilingual AI Chatbot (Vercel AI SDK)

- **Endpoint**: `/api/chat` powered by the Vercel AI SDK.
- **Knowledge Grounding**: System prompt strictly grounded in Apollo Green Solutions' technical hardware specs, founder Rafail Kasapis, team members, and BESS algorithms.
- **Bilingual Intelligence**: Intelligently detects English or German user queries and streams fluent responses in the appropriate language.
- **Dual-Mode Streaming**:
  - When `OPENAI_API_KEY` is provided in `.env.local`, connects to OpenAI (`gpt-4o-mini`).
  - When run keyless/offline, the built-in intelligent streaming engine provides instantaneous streaming answers without requiring any third-party API key.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router, Turbopack, Standalone output)
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Engine**: [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`, `@ai-sdk/openai`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Containerization**: Docker (Multi-stage Alpine build)

---

## How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v20/v25)
- npm 9+

### 1. Install dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Test Production Locally
```bash
npm run build
npm run start
```

---

## Production Deployment Guide

### Option A: Vercel (Recommended)

1. Push your repository to GitHub / GitLab.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project**.
3. Next.js is automatically detected with pre-configured settings.
4. (Optional) Set `OPENAI_API_KEY` under **Environment Variables** if you wish to use live OpenAI models.
5. Click **Deploy**. Production security headers and static asset caching are pre-configured via [`vercel.json`](./vercel.json).

### Option B: Docker Container

The project includes a multi-stage production [`Dockerfile`](./Dockerfile) using Next.js standalone output for minimal image size (~150MB):

```bash
# 1. Build the Docker image
docker build -t apollo-energy-web .

# 2. Run the container on port 3000
docker run -d -p 3000:3000 --name apollo-app --restart unless-stopped apollo-energy-web
```
Verify the running container:
```bash
curl http://localhost:3000
```

### Option C: Standalone Node.js Server

Next.js is configured with `output: "standalone"` in `next.config.ts`. To deploy to any bare-metal Linux or VPS server:

```bash
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
cd .next/standalone
NODE_ENV=production PORT=3000 node server.js
```

---

## Environment Variables

See [`.env.example`](./.env.example) for template configuration:

| Variable | Description | Required | Default |
| :--- | :--- | :--- | :--- |
| `OPENAI_API_KEY` | OpenAI API key for live GPT-4o-mini chatbot inference | No (Fallback engine included) | `""` |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL for Open Graph and metadata | No | `https://apollo-gs.com` |
| `PORT` | Listening port for production server | No | `3000` |

---

## Evaluation Checklist

- [x] **Next.js 16 & TypeScript**: App Router with Turbopack, zero TypeScript errors (`npx tsc --noEmit` passes).
- [x] **Light & Green Brand Aesthetics**: Light foundation (`#f8faf9`), green palette (`#16a34a`, `#22c55e`), soft rounded corners (`rounded-2xl`, `rounded-3xl`).
- [x] **Energy Management Hero**: Authentic energy backdrop (`public/hero-bg.jpg`) with live telemetry ticker.
- [x] **Bilingual Support (EN / DE)**: English default with instantaneous German switch; Turkish cleanly removed.
- [x] **Framer Motion Animations**: Smooth page transitions, interactive tab switches, and card micro-interactions.
- [x] **Product Catalog & Specs**: 6 products with category filters, protocol matrix, and technical modal.
- [x] **Verified Company History**: Grounded in `https://www.apollo-gs.com/about-us` (Rafail Kasapis, Jan 2023, team, duality).
- [x] **Validated Contact Form**: Form validation, confetti celebration, and dual Germany/Greece headquarters.
- [x] **Vercel AI SDK Chatbot**: Bilingual streaming chatbot grounded in Apollo's technical documentation.
- [x] **Production Ready**: Standalone output, multi-stage `Dockerfile`, `vercel.json` security headers, and `.env.example`.
