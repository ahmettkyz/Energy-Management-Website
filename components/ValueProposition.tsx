"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Eye, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValueProposition() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-[#030813] relative border-t border-blue-900/30 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.valueProp.tag}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            {t.valueProp.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed"
          >
            {t.valueProp.description}
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: The Sun (Physical Hardware) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#09152C]/90 to-[#060E1D]/90 border border-blue-800/40 hover:border-amber-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t.valueProp.pillar1Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar1Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Class 0.2S Revenue Grade Metering</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>IP67 Industrial Enclosures</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Modbus, BACnet, CAN & LoRaWAN</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 2: The Prophecy (Digital Intelligence & AI) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#09152C]/90 to-[#060E1D]/90 border border-blue-800/40 hover:border-cyan-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t.valueProp.pillar2Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar2Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Day-Ahead Load Forecasting Models</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Automated Peak Shaving Dispatch</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Vibration & Thermal Anomaly Detection</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 3: End-to-End Synergy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#09152C]/90 to-[#060E1D]/90 border border-blue-800/40 hover:border-blue-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t.valueProp.pillar3Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar3Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Zero Third-Party Vendor Finger-Pointing</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Direct Firmware-to-Cloud Optimization</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>99.98% End-to-End Telemetry SLA</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
