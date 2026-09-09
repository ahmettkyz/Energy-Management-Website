"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CallToAction() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 sm:p-14 rounded-3xl bg-white border border-green-100 shadow-2xl shadow-green-100/40"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            Apollo Green Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            {t.cta.title}
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-green-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{t.cta.primaryBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-green-600" />
              <span>{t.cta.secondaryBtn}</span>
            </Link>
          </div>

          {/* Value guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>{language === "de" ? "30-Tage-Pilotinstallation" : "30-Day Pilot Deployment"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>{language === "de" ? "Hardware + Software-Garantie" : "Unified Hardware + SaaS SLA"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>{language === "de" ? "Deutschland & Griechenland Support" : "Germany & Greece Engineering Support"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
