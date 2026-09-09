"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Battery,
  TrendingDown,
  AlertTriangle,
  Cpu,
  RefreshCw,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TelemetryDashboard() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"flow" | "shaving" | "quality" | "esg">("flow");
  const [isLive, setIsLive] = useState(true);

  // Simulated live telemetry metrics
  const solarGen = 412.5; // kW
  const plantLoad = 684.2; // kW
  const batterySOC = 84; // %
  const gridImport = 271.7; // kW

  return (
    <section className="py-24 bg-[#050B16] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              {language === "tr" ? "CANLI PLATFORM DEMOSU" : "LIVE PLATFORM DEMO"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {language === "tr"
                ? "Apollo GridOS Telemetri Konsolu"
                : "Apollo GridOS Telemetry Console"}
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg max-w-2xl">
              {language === "tr"
                ? "Yüksek frekanslı sensörlerimizden gelen anlık enerji akışını, tepe yük tıraşlamayı ve kestirimci analizleri keşfedin."
                : "Experience real-time power flows, automated peak shaving, and sub-second anomaly detection streamed from deployed Apollo Gateways."}
            </p>
          </div>

          {/* Controls: Live Status & Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsLive(!isLive)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-all shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLive ? "animate-spin text-emerald-400" : "text-slate-500"}`} />
              <span>{isLive ? (language === "tr" ? "Canlı Yayın: Açık" : "Stream: Active") : (language === "tr" ? "Durduruldu" : "Paused")}</span>
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-800">
          {[
            { id: "flow", label: language === "tr" ? "1. Güç Akışı & Mikroşebeke" : "1. Microgrid Power Flow" },
            { id: "shaving", label: language === "tr" ? "2. AI Tepe Tıraşlama (Peak Shaving)" : "2. AI Peak Shaving" },
            { id: "quality", label: language === "tr" ? "3. Güç Kalitesi & Harmonikler" : "3. Power Quality & Harmonics" },
            { id: "esg", label: language === "tr" ? "4. Scope 1-2 Karbon Sayacı" : "4. ESG Scope 1-2 Carbon" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Panel */}
        <AnimatePresence mode="wait">
          {activeTab === "flow" && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Card 1: Solar Generation */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A162B] to-[#070F1E] border border-blue-900/40 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {language === "tr" ? "GÜNEŞ ÜRETİMİ (PV)" : "SOLAR GENERATION"}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Sun className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {solarGen} <span className="text-base font-medium text-cyan-400">kW</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{language === "tr" ? "1,200 Panel Aktif" : "1,200 PV Panels Online"}</span>
                  <span className="text-emerald-400 font-semibold">+18.4% vs Avg</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 w-3/4 rounded-full"></div>
                </div>
              </div>

              {/* Card 2: Plant Demand / Load */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A162B] to-[#070F1E] border border-blue-900/40 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {language === "tr" ? "FABRİKA YÜKÜ" : "FACILITY DEMAND"}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {plantLoad} <span className="text-base font-medium text-blue-400">kW</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{language === "tr" ? "Hat A, B & C Devrede" : "Lines A, B & C Active"}</span>
                  <span className="text-cyan-400 font-semibold">98.2% PF</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-4/5 rounded-full"></div>
                </div>
              </div>

              {/* Card 3: Battery Energy Storage */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A162B] to-[#070F1E] border border-blue-900/40 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {language === "tr" ? "BESS BATARYA (SOC)" : "BESS STORAGE (SOC)"}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Battery className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {batterySOC}% <span className="text-sm font-medium text-slate-400">(420 kWh)</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{language === "tr" ? "Mod: Tepe Tıraşlama" : "Mode: Peak Shave Standby"}</span>
                  <span className="text-emerald-400 font-semibold">Ready</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[84%] rounded-full"></div>
                </div>
              </div>

              {/* Card 4: Grid Import */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A162B] to-[#070F1E] border border-blue-900/40 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {language === "tr" ? "ŞEBEKEDEN ÇEKİŞ" : "GRID IMPORT"}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {gridImport} <span className="text-base font-medium text-purple-400">kW</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{language === "tr" ? "%60 Öz Tüketim Oranı" : "60% Self-Consumption"}</span>
                  <span className="text-emerald-400 font-semibold">-40.2% Net</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-purple-500 w-1/2 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "shaving" && (
            <motion.div
              key="shaving"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-[#091325] border border-blue-900/50 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-block px-3 py-1 rounded bg-blue-900/40 text-cyan-400 text-xs font-bold mb-3">
                    {language === "tr" ? "YAPAY ZEKA TAHMİN ALGORİTMASI" : "PREDICTIVE TARIFF DISPATCH"}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {language === "tr"
                      ? "Puant Saatlerde Otomatik Kapasite Koruma"
                      : "Automatic Capacity Threshold Protection"}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {language === "tr"
                      ? "Apollo OptiStorage algoritması, fabrikanın elektrik tüketimini 15 dakikalık sözleşme aşım sınırından (700 kW) önce tespit ederek BESS bataryalarını devreye alır ve 24,000 € tutarındaki reaktif & talep cezasını önler."
                      : "Apollo OptiStorage predicts peak demand spikes 45 minutes ahead. It dispatches battery power instantaneously when load approaches the 700 kW contract limit, preventing costly tariff surcharges."}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-900/50">
                      <div className="text-2xl font-bold text-cyan-400">€ 28,450</div>
                      <div className="text-xs text-slate-400 mt-1">
                        {language === "tr" ? "Bu Ay Önlenen Ceza" : "Avoided Penalties (MTD)"}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-900/50">
                      <div className="text-2xl font-bold text-emerald-400">22.4 ms</div>
                      <div className="text-xs text-slate-400 mt-1">
                        {language === "tr" ? "BESS Devreye Giriş Hızı" : "BESS Dispatch Latency"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-96 p-6 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs uppercase font-bold text-slate-400 mb-4 flex items-center justify-between">
                    <span>{language === "tr" ? "Tarife Durumu" : "Tariff Window"}</span>
                    <span className="text-amber-400 font-bold">PEAK RATE ACTIVE</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>{language === "tr" ? "Sözleşme Tavanı:" : "Contract Cap:"}</span>
                      <span className="font-bold text-white">700.0 kW</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{language === "tr" ? "Anlık Şebeke Çekişi:" : "Current Grid Load:"}</span>
                      <span className="font-bold text-cyan-400">540.2 kW</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{language === "tr" ? "BESS Destek Payı:" : "BESS Discharge:"}</span>
                      <span className="font-bold text-emerald-400">144.0 kW</span>
                    </div>
                    <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{language === "tr" ? "Tavan Aşımı Engellendi (%100)" : "Threshold Protected (100%)"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "quality" && (
            <motion.div
              key="quality"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-[#091325] border border-blue-900/50 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 mb-2">VOLTAGE THD</div>
                  <div className="text-2xl font-bold text-emerald-400">1.42%</div>
                  <div className="text-xs text-slate-400 mt-2">IEC 61000-4-30 Class A (&lt; 5.0% Limit)</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 mb-2">POWER FACTOR (COS φ)</div>
                  <div className="text-2xl font-bold text-cyan-400">0.985 IND</div>
                  <div className="text-xs text-slate-400 mt-2">No Reactive Surcharges Incurred</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 mb-2">SAMPLING RATE</div>
                  <div className="text-2xl font-bold text-purple-400">12.8 kHz</div>
                  <div className="text-xs text-slate-400 mt-2">256 samples per cycle per phase</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "esg" && (
            <motion.div
              key="esg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-[#091325] border border-blue-900/50 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === "tr" ? "Otomatik CSRD & GHG Emisyon Kayıt Defteri" : "Automated CSRD & GHG Protocol Ledger"}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-xl">
                    {language === "tr"
                      ? "Apollo Carbon Sentinel, tüketilen her kWh elektriği yerel şebekenin anlık karbon yoğunluğu katsayısı ile çarparak üçüncü taraf denetimlerine hazır kriptografik zaman damgalı raporlar üretir."
                      : "Apollo Carbon Sentinel dynamically pairs every kWh consumed with hourly grid emissions intensity factors, generating certified auditor-ready reports."}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl font-extrabold text-emerald-400">45,820 kg</div>
                    <div className="text-xs text-slate-400">
                      {language === "tr" ? "Bu Çeyrekte Önlenen Emisyon" : "Quarterly CO₂ Mitigated"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
