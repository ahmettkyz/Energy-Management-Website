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
      className="p-8 rounded-3xl bg-white border border-green-100 hover:border-green-200 shadow-md hover:shadow-xl hover:shadow-green-100/50 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5"
    >
      <div>
        {/* Top meta */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700">
            {product.badge}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-green-600 mb-4 uppercase tracking-wide">
          {product.tagline}
        </p>

        {/* Short Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Top 3 Specs Preview */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs">
          {product.specs.slice(0, 3).map((spec, i) => (
            <div key={i} className="flex items-start justify-between gap-2">
              <span className="text-gray-400">{spec.name}:</span>
              <span className="text-gray-700 font-mono text-right font-medium">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Highlights bullets */}
        <ul className="space-y-2 mb-8 text-xs text-gray-600">
          {product.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to open specs modal */}
      <button
        onClick={() => onSelect(product)}
        className="w-full py-3.5 px-5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-green-500/20 active:scale-95"
      >
        <span>
          {language === "de" ? "Vollständige Spezifikationen" : "View Full Specifications"}
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
