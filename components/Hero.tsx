"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gauge, Monitor, Sliders, ArrowRight, Activity, ShieldCheck, Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with green energy-relevant overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-green-950/80 to-gray-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />

        {/* Subtle green radial glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-4xl">
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Leaf className="w-3.5 h-3.5" />
            Apollo Green Solutions
          </motion.div>

          {/* Subtitle / Pretitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed max-w-3xl mb-6 tracking-wide"
          >
            {t.hero.pretitle}
          </motion.p>

          {/* Huge, bold headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl mb-12"
          >
            {t.hero.title}
          </motion.h1>

          {/* Action Row: Pill Button + 3 Circular Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-2"
          >
            {/* Primary Pill Button */}
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-green-50 text-gray-900 font-bold text-base tracking-wide shadow-xl shadow-black/20 hover:shadow-green-400/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>{t.hero.ctaButton}</span>
              <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Feature Badges Row */}
            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-1 sm:space-x-2">
                {/* Measure */}
                <div
                  title={t.hero.measure}
                  className="w-11 h-11 rounded-full bg-green-900/40 border border-green-400/50 backdrop-blur-md flex items-center justify-center text-green-300 shadow-md hover:scale-110 hover:border-green-300 transition-all cursor-pointer group"
                >
                  <Gauge className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Monitor */}
                <div
                  title={t.hero.monitor}
                  className="w-11 h-11 rounded-full bg-green-900/40 border border-green-400/50 backdrop-blur-md flex items-center justify-center text-green-300 shadow-md hover:scale-110 hover:border-green-300 transition-all cursor-pointer group"
                >
                  <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>

                {/* Manage */}
                <div
                  title={t.hero.manage}
                  className="w-11 h-11 rounded-full bg-green-900/40 border border-green-400/50 backdrop-blur-md flex items-center justify-center text-green-300 shadow-md hover:scale-110 hover:border-green-300 transition-all cursor-pointer group"
                >
                  <Sliders className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                </div>
              </div>

              {/* Accompanying Label */}
              <div className="flex flex-col pl-1 border-l border-slate-600/60">
                <span className="text-sm font-extrabold text-white tracking-wider uppercase">
                  {t.hero.badgeTitle}
                </span>
                <span className="text-xs text-slate-300/80 font-normal">
                  {t.hero.badgeSubtitle}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Telemetry Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-24 p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl max-w-5xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 shrink-0">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  50.02 Hz
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider">
                  {t.hero.gridStability} (Normal)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 md:pl-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  1,400+
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider">
                  {t.hero.activeSensors}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 md:pl-4">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  99.98%
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider">
                  {language === "de" ? "Telemetrie SLA" : "Telemetry SLA"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 md:pl-4">
              <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 shrink-0">
                <span className="text-xs font-bold">CO₂</span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  45,000t
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider">
                  {t.hero.carbonMitigated}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
