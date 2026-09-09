"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, BatteryCharging, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function KeyFeatures() {
  const { t, language } = useLanguage();

  const featureItems = [
    {
      icon: Activity,
      title: t.features.f1Title,
      desc: t.features.f1Desc,
      tag: "CLASS 0.2S",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      link: "/products#apollo-pulse-analyzer",
    },
    {
      icon: ShieldAlert,
      title: t.features.f2Title,
      desc: t.features.f2Desc,
      tag: "AI SENTRY",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      link: "/products#apollo-predictive-sentry",
    },
    {
      icon: BatteryCharging,
      title: t.features.f3Title,
      desc: t.features.f3Desc,
      tag: "PEAK SHAVING",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      link: "/products#apollo-optistorage",
    },
    {
      icon: FileText,
      title: t.features.f4Title,
      desc: t.features.f4Desc,
      tag: "EU CSRD",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      link: "/products#apollo-carbon-sentinel",
    },
  ];

  return (
    <section className="py-24 bg-[#050C18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            {t.features.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#09152B] to-[#060F1E] border border-blue-900/40 hover:border-blue-500/50 shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors pt-4 border-t border-slate-800"
                >
                  <span>{language === "tr" ? "Detaylı Özellikleri İncele" : "Explore Technical Specs"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
