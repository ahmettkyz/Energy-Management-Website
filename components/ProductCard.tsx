"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Activity,
  Server,
  BatteryCharging,
  ShieldAlert,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const iconMap = {
  Cpu: Cpu,
  Activity: Activity,
  Server: Server,
  BatteryCharging: BatteryCharging,
  ShieldAlert: ShieldAlert,
  FileText: FileText,
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { language } = useLanguage();
  const Icon = iconMap[product.iconName] || Cpu;

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/40 hover:border-cyan-400/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
    >
      <div>
        {/* Top meta */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-cyan-300">
            {product.badge}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-cyan-400/90 mb-4 uppercase tracking-wide">
          {product.tagline}
        </p>

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Top 2 Specs Preview */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
          {product.specs.slice(0, 3).map((spec, i) => (
            <div key={i} className="flex items-start justify-between gap-2">
              <span className="text-slate-400">{spec.name}:</span>
              <span className="text-slate-200 font-mono text-right font-medium">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Highlights bullets */}
        <ul className="space-y-2 mb-8 text-xs text-slate-300">
          {product.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to open specs modal */}
      <button
        onClick={() => onSelect(product)}
        className="w-full py-3.5 px-5 rounded-xl bg-blue-900/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 border border-blue-700/40 hover:border-transparent text-slate-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-600/20 active:scale-95"
      >
        <span>
          {language === "tr" ? "Teknik Özellikleri Görüntüle" : "View Full Specifications"}
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
