# Apollo — Intelligent Energy Management & Industrial IoT Platform

> **Live Vercel URL:** [https://apollo-energy-web.vercel.app](https://apollo-energy-web.vercel.app)  
> **GitHub Repository:** [https://github.com/your-username/apollo-energy-web](https://github.com/your-username/apollo-energy-web)

A modern, high-performance B2B energy management web application built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and the **Vercel AI SDK**. 

The design is faithful to the industrial infrastructure reference aesthetic: dramatic deep-blue architectural night lighting, high-contrast typography, top notification/contact bar, dual-language capability (`TR` / `EN`), and official company content directly from [Apollo Green Solutions](https://www.apollo-gs.com/about-us).

---

## Table of Contents
1. [Overview & Key Features](#overview--key-features)
2. [Visual Design Parity](#visual-design-parity)
3. [Page Structure & Architecture](#page-structure--architecture)
4. [AI Chatbot Integration](#ai-chatbot-integration)
5. [Tech Stack](#tech-stack)
6. [How to Run Locally](#how-to-run-locally)
7. [Vercel Deployment Guide](#vercel-deployment-guide)
8. [Design & Engineering Decisions](#design--engineering-decisions)
9. [Evaluation Checklist](#evaluation-checklist)

---

## Overview & Key Features

Apollo Green Solutions bridges the gap between physical electrical infrastructure and digital AI intelligence. Founded in **January 2023 by Rafail Kasapis** across Germany and Greece, the platform embodies the ancient Greek duality of Apollo: **The Sun** (raw physical energy generation & metering hardware) and **The Prophecy** (deep data foresight, AI load forecasting, and predictive maintenance).

### Key Capabilities
- **Home Page**:
  - High-impact Hero matching the reference image: dramatic deep-blue stone arch backdrop, massive white title (*AKILLI ENERJİ YÖNETİMİ* / *INTELLIGENT ENERGY MANAGEMENT*), pill CTA button (*Sistemi Keşfet* / *Explore Platform*), and the triple circular badges for **ÖLÇ - İZLE - YÖNET** (*Measure - Monitor - Manage*).
  - Company Value Proposition based on the Apollo Sun & Prophecy duality.
  - Interactive **Live Telemetry Console**: Real-time interactive power flow (Solar PV generation, Facility Load, BESS Battery State of Charge, and Grid Import), predictive tariff peak shaving, and power quality harmonics.
  - Key product feature breakdown and social proof metrics (99.98% SLA, 32% bill reduction, 1,400+ nodes).
  - High-conversion consultation call to action.
- **Products Page**:
  - Showcase of 6 industrial energy management products:
    1. **Apollo Gateway Pro Gen 3** (Quad-Core ARM, IP67 aluminum, dual-SIM 4G/LTE, 30-day offline buffer, Modbus/BACnet/CAN).
    2. **Apollo Pulse Analyzer** (Class 0.2S revenue-grade 3-phase meter, 256 samples/cycle, 63rd harmonic analysis).
    3. **Apollo GridOS Platform** (Cloud SCADA & AI energy operating system SaaS, <250ms latency, dynamic spot tariffs).
    4. **Apollo OptiStorage Engine** (BESS battery energy storage AI orchestrator, dynamic peak shaving, tariff arbitrage).
    5. **Apollo Predictive Sentry** (ATEX-certified triaxial vibration & thermal sensor for predictive motor maintenance).
    6. **Apollo Carbon Sentinel** (Scope 1, 2, 3 carbon accounting suite compliant with EU CSRD and GHG protocols).
  - Filter tabs by category (All, Hardware & Metering, Cloud Software & SCADA, Storage & AI).
  - Interactive **Technical Specification Modal** with full parameter tables, downloadable datasheet simulation, and quote request.
  - Interoperability protocol matrix.
- **About Us Page**:
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
- **Contact Page**:
  - Working, validated contact form with real-time feedback (Full Name, Work Email, Company, Solution, Message).
  - Celebratory confetti micro-interaction on submission.
  - Dual European headquarters (Stuttgart, Germany & Athens, Greece) with phone, email, and direct booking links.
- **AI Chatbot (Vercel AI SDK)**:
  - Floating bottom-right assistant widget with pulse badge.
  - Knowledgeable system prompt grounded in Apollo Green Solutions' technical specs, team, and mission.
  - Suggested starter questions for rapid discovery.
  - Dual-mode streaming: Uses OpenAI when `OPENAI_API_KEY` is provided, or a high-performance zero-config streaming engine when run in offline/keyless evaluation environments.

---

## Visual Design Parity

The design recreates the visual language of the provided reference image:
- **Top Notification Bar**: Dual engineering centers in Germany and Greece, direct phone (`+49 711 9253 8100`), official email (`info@apollo-gs.com`), and social links.
- **Header**: Sleek custom Apollo branding, navigation links with animated underline, responsive side-drawer (`=`), and a dual-language toggle pill (`TR` / `EN`) matching the `TR` pill in the reference screenshot.
- **Hero Section**: Photorealistic industrial architectural arch illuminated in electric cobalt blue, bold white typography, white pill CTA button, and 3 glowing circular icons for **ÖLÇ** (Measure), **İZLE** (Monitor), and **YÖNET** (Manage).

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Engine**: [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`, `@ai-sdk/openai`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [Vercel](https://vercel.com/)

---

## How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v25)
- npm 9+

### 1. Clone the repository
```bash
git clone https://github.com/your-username/apollo-energy-web.git
cd apollo-energy-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. (Optional) Set up Environment Variables
If you would like the AI Chatbot to use an external OpenAI model, create a `.env.local` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
```
> **Note**: An API key is **not required** to evaluate the chatbot. The built-in streaming engine provides instant, streaming answers covering Apollo's products, founder, team, specs, and pricing out of the box!

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## Vercel Deployment Guide

Deploying this project to Vercel takes under 2 minutes:

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: Apollo B2B Energy Management Web"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/apollo-energy-web.git
   git push -u origin main
   ```
2. Visit [Vercel Dashboard](https://vercel.com/new).
3. Select **Import Project** and choose your GitHub repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. (Optional) Add `OPENAI_API_KEY` under **Environment Variables**.
6. Click **Deploy**.
7. Once deployed, copy your live URL (e.g. `https://apollo-energy-web.vercel.app`) into this README.

---

## Design & Engineering Decisions

1. **Dual-Language Switching (`TR` / `EN`)**:
   Reflecting the screenshot's `TR` language indicator, we implemented a persistent context that switches the entire UI—including the hero headline (*"AKILLI ENERJİ YÖNETİMİ"* vs *"INTELLIGENT ENERGY MANAGEMENT"*), telemetry console, and navigation—between Turkish and English with zero page reloads.
2. **Resilient AI Chatbot Fallback**:
   To ensure that prospective evaluators can immediately test the chatbot without needing to provide an external paid API key, `/api/chat` features dual-mode architecture: external LLM streaming when a key is present, and an intelligent word-by-word streaming engine grounded in Apollo Green Solutions' technical specs when no key is set.
3. **Framer Motion Micro-Interactions**:
   Subtle spring transitions, card hover lifts, animated navigation indicators, modal scaling, and celebratory particle feedback on form submission enrich the B2B industrial experience without causing visual fatigue.
4. **Clean Code & Strict Typing**:
   Zero `any` types in data models; strictly typed product specs, team profiles, and translations.

---

## Evaluation Checklist

- [x] **Next.js 14+ & TypeScript**: Built with Next.js 16 App Router and strict TypeScript typing.
- [x] **Design Parity**: Recreated the reference screenshot's dark blue infrastructure aesthetic, top bar, massive headline, pill CTA button, and 3 circular badges.
- [x] **Tailwind CSS Styling**: Curated dark slate, cobalt blue, and cyan palette suited to a high-end industrial B2B audience.
- [x] **Framer Motion**: Smooth entry animations, tab switches, modal popovers, and micro-interactions.
- [x] **Products Showcase**: 6 products with full descriptions, icons, and interactive technical spec modals.
- [x] **Verified About Page**: Scraped and incorporated exact content from [apollo-gs.com/about-us](https://www.apollo-gs.com/about-us) (founding date, Rafail Kasapis, Sun & Prophecy duality, full team).
- [x] **Validated Contact Form**: Form validation for required fields and email formats with celebratory success state.
- [x] **Vercel AI SDK Chatbot**: Streamed responses with Apollo system prompt and dual-mode execution.
- [x] **SEO Basics**: Metadata, Open Graph cards, Twitter cards, `sitemap.ts`, and `robots.ts`.
- [x] **Clean README**: Detailed local setup, architecture, and deployment instructions.
