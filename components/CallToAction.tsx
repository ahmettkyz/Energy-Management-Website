"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CallToAction() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden">
      {/* Visual glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0B172E] to-[#070F1E] border border-blue-700/40 shadow-2xl shadow-blue-900/30"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t.cta.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{t.cta.primaryBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{t.cta.secondaryBtn}</span>
            </Link>
          </div>

          {/* Value guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === "tr" ? "30 Günlük Pilot Kurulum" : "30-Day Pilot Deployment"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === "tr" ? "Donanım + Yazılım Garantisi" : "Unified Hardware + SaaS SLA"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === "tr" ? "Almanya & Yunanistan Mühendislik Desteği" : "Germany & Greece Engineering Support"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
