"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Eye, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.valueProp.tag}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
          >
            {t.valueProp.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
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
            className="p-8 rounded-3xl bg-gradient-to-b from-amber-50 to-orange-50/50 border border-amber-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 shadow-md transition-all duration-500 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:bg-amber-200 transition-all duration-300">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.valueProp.pillar1Title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar1Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-gray-500 border-t border-amber-100 pt-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Class 0.2S Revenue Grade Metering</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>IP67 Industrial Enclosures</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
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
            className="p-8 rounded-3xl bg-gradient-to-b from-green-50 to-emerald-50/50 border border-green-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 shadow-md transition-all duration-500 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.valueProp.pillar2Title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar2Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-gray-500 border-t border-green-100 pt-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span>Day-Ahead Load Forecasting Models</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span>Automated Peak Shaving Dispatch</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
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
            className="p-8 rounded-3xl bg-gradient-to-b from-teal-50 to-cyan-50/50 border border-teal-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 shadow-md transition-all duration-500 group hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 group-hover:bg-teal-200 transition-all duration-300">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.valueProp.pillar3Title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.valueProp.pillar3Desc}
            </p>
            <ul className="space-y-2.5 text-xs text-gray-500 border-t border-teal-100 pt-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>Zero Third-Party Vendor Finger-Pointing</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>Direct Firmware-to-Cloud Optimization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>99.98% End-to-End Telemetry SLA</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
