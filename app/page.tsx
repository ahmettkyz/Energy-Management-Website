import React from "react";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TelemetryDashboard from "@/components/TelemetryDashboard";
import KeyFeatures from "@/components/KeyFeatures";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section matching the user's reference screenshot */}
      <Hero />

      {/* 2. Company Value Proposition (The Sun & Prophecy Duality from apollo-gs.com) */}
      <ValueProposition />

      {/* 3. Interactive Live Telemetry Console & Energy HUD */}
      <TelemetryDashboard />

      {/* 4. Key Product Features (Sub-metering, Anomaly Sentry, BESS, ESG) */}
      <KeyFeatures />

      {/* 5. Enterprise Call To Action */}
      <CallToAction />
    </>
  );
}
