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
      accent: "green",
      link: "/products#apollo-pulse-analyzer",
    },
    {
      icon: ShieldAlert,
      title: t.features.f2Title,
      desc: t.features.f2Desc,
      tag: "AI SENTRY",
      accent: "emerald",
      link: "/products#apollo-predictive-sentry",
    },
    {
      icon: BatteryCharging,
      title: t.features.f3Title,
      desc: t.features.f3Desc,
      tag: "PEAK SHAVING",
      accent: "teal",
      link: "/products#apollo-optistorage",
    },
    {
      icon: FileText,
      title: t.features.f4Title,
      desc: t.features.f4Desc,
      tag: "EU CSRD",
      accent: "green",
      link: "/products#apollo-carbon-sentinel",
    },
  ];

  const accentMap: Record<string, { iconBg: string; iconText: string; border: string; tagBg: string; tagText: string; linkText: string }> = {
    green: {
      iconBg: "bg-green-100",
      iconText: "text-green-600",
      border: "border-green-100 hover:border-green-200",
      tagBg: "bg-green-50",
      tagText: "text-green-700",
      linkText: "text-green-600 hover:text-green-700",
    },
    emerald: {
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      border: "border-emerald-100 hover:border-emerald-200",
      tagBg: "bg-emerald-50",
      tagText: "text-emerald-700",
      linkText: "text-emerald-600 hover:text-emerald-700",
    },
    teal: {
      iconBg: "bg-teal-100",
      iconText: "text-teal-600",
      border: "border-teal-100 hover:border-teal-200",
      tagBg: "bg-teal-50",
      tagText: "text-teal-700",
      linkText: "text-teal-600 hover:text-teal-700",
    },
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Soft background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            {t.features.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureItems.map((item, idx) => {
            const Icon = item.icon;
            const ac = accentMap[item.accent] ?? accentMap.green;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-white border ${ac.border} hover:shadow-xl shadow-md transition-all duration-500 group hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${ac.iconBg} flex items-center justify-center ${ac.iconText} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-lg ${ac.tagBg} ${ac.tagText} uppercase border border-current/10`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${ac.linkText} transition-colors pt-4 border-t border-gray-100`}
                >
                  <span>{language === "de" ? "Technische Details" : "Explore Technical Specs"}</span>
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
