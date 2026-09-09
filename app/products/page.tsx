"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductSpecsModal from "@/components/ProductSpecsModal";
import { Cpu, Server, BatteryCharging, Filter, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: language === "tr" ? "Tüm Ürünler (6)" : "All Products (6)" },
    { id: "hardware", label: language === "tr" ? "Donanım & Sayaçlar" : "Hardware & Metering" },
    { id: "software", label: language === "tr" ? "Bulut & SCADA Yazılımı" : "Cloud & SCADA" },
    { id: "storage_ai", label: language === "tr" ? "Batarya & AI Kestirim" : "Storage & AI Sentry" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === "tr" ? "ENDÜSTRİYEL PORTFÖY" : "ENTERPRISE PORTFOLIO"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {language === "tr"
              ? "Enerji Yönetim Donanım & Yazılımları"
              : "Energy Management Hardware & Software"}
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {language === "tr"
              ? "Tesisinizin kalbinden bulut sistemine kadar uzanan, Class 0.2S gelir sınıfı analizörlerden yapay zeka destekli BESS tepe yük optimizasyonuna kadar tam entegre teknoloji yelpazesi."
              : "Engineered from edge to cloud: Discover our revenue-grade Class 0.2S power analyzers, resilient IoT gateways, and AI-driven cloud optimization systems."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-slate-800">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === "tr" ? "Filtre:" : "Filter:"}</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>

        {/* Technical Architecture Comparison Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/50 shadow-2xl mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              {language === "tr" ? "PROTOKOL & ENTEGRASYON MATRİSİ" : "INTEROPERABILITY MATRIX"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {language === "tr"
                ? "Tüm Endüstriyel Şebeke Standartlarıyla Uyumlu"
                : "Designed for Native Industrial Interoperability"}
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              {language === "tr"
                ? "Apollo ürünleri mevcut SCADA, PLC ve sayaç altyapınızla sıfır kesintiyle haberleşir."
                : "Apollo hardware and software integrate seamlessly into existing brownfield and greenfield substation architectures."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Product</th>
                  <th className="py-3 px-4 font-bold">Deployment Type</th>
                  <th className="py-3 px-4 font-bold">Key Protocols</th>
                  <th className="py-3 px-4 font-bold">Sampling / Accuracy</th>
                  <th className="py-3 px-4 font-bold">Security / Standards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Apollo Gateway Pro</td>
                  <td className="py-3.5 px-4 text-cyan-300">Substation / Edge (IP67)</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">Modbus, BACnet, CAN, LoRa</td>
                  <td className="py-3.5 px-4 text-slate-300">Sub-second registers</td>
                  <td className="py-3.5 px-4 text-emerald-400">IEC 62443-4-2, TPM 2.0</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Apollo Pulse Analyzer</td>
                  <td className="py-3.5 px-4 text-cyan-300">DIN Rail / Panel Mount</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">Modbus TCP/RTU, DNP3</td>
                  <td className="py-3.5 px-4 text-slate-300">Class 0.2S (256 s/c)</td>
                  <td className="py-3.5 px-4 text-emerald-400">IEC 61000-4-30 Class A</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Apollo GridOS Cloud</td>
                  <td className="py-3.5 px-4 text-cyan-300">European Cloud / On-Prem</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">Kafka, MQTT, REST, WSS</td>
                  <td className="py-3.5 px-4 text-slate-300">&lt; 250ms latency SLA</td>
                  <td className="py-3.5 px-4 text-emerald-400">ISO 27001, SOC 2, GDPR</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Apollo OptiStorage</td>
                  <td className="py-3.5 px-4 text-cyan-300">Microgrid BESS Controller</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">SunSpec, OpenADR, CANopen</td>
                  <td className="py-3.5 px-4 text-slate-300">&lt; 20ms islanding dispatch</td>
                  <td className="py-3.5 px-4 text-emerald-400">UL 9540A Verified</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Predictive Sentry</td>
                  <td className="py-3.5 px-4 text-cyan-300">Magnetic Mount / ATEX</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">BLE 5.2 Mesh, Wirepas</td>
                  <td className="py-3.5 px-4 text-slate-300">10 kHz Triaxial MEMS</td>
                  <td className="py-3.5 px-4 text-emerald-400">ATEX Zone 2 / IECEx</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="py-3.5 px-4 font-bold text-white">Carbon Sentinel</td>
                  <td className="py-3.5 px-4 text-cyan-300">Cloud ESG Ledger SaaS</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">SAP, Oracle, ESG API</td>
                  <td className="py-3.5 px-4 text-slate-300">Hourly Scope 1, 2, 3</td>
                  <td className="py-3.5 px-4 text-emerald-400">EU CSRD & GHG Protocol</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-blue-950/60 to-cyan-950/40 border border-blue-700/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "tr"
                ? "Tesisinize Özel Donanım Fizibilitesi İsteyin"
                : "Need a Custom Substation or Factory Specification?"}
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              {language === "tr"
                ? "Mühendislerimiz tek hat şemanızı inceleyerek en uygun gateway ve sayaç konfigürasyonunu belirlesin."
                : "Our systems engineering team will review your single-line diagram (SLD) and configure the optimal hardware & telemetry topology."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-white/10 shrink-0 flex items-center gap-2"
          >
            <span>{language === "tr" ? "Fizibilite Görüşmesi Planla" : "Book Feasibility Call"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Specifications Modal */}
      <ProductSpecsModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
}
