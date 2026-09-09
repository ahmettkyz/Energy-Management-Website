"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductSpecsModal from "@/components/ProductSpecsModal";
import { Cpu, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: language === "de" ? "Alle Produkte (6)" : "All Products (6)" },
    { id: "hardware", label: language === "de" ? "Hardware & Messgeräte" : "Hardware & Metering" },
    { id: "software", label: language === "de" ? "Cloud & SCADA" : "Cloud & SCADA" },
    { id: "storage_ai", label: language === "de" ? "Speicher & KI" : "Storage & AI Sentry" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === "de" ? "ENTERPRISE PORTFOLIO" : "ENTERPRISE PORTFOLIO"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            {language === "de"
              ? "Energiemanagement Hardware & Software"
              : "Energy Management Hardware & Software"}
          </h1>

          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            {language === "de"
              ? "Engineered from Edge to Cloud: Entdecken Sie unsere umsatzklasse Klasse 0.2S Leistungsanalysatoren, robusten IoT-Gateways und KI-gesteuerten Cloud-Optimierungssysteme."
              : "Engineered from edge to cloud: Discover our revenue-grade Class 0.2S power analyzers, resilient IoT gateways, and AI-driven cloud optimization systems."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === "de" ? "Filter:" : "Filter:"}</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                  : "bg-white text-gray-500 hover:text-gray-800 hover:bg-green-50 border border-gray-200"
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
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-green-100 shadow-xl mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold text-green-600 tracking-wider">
              {language === "de" ? "INTEROPERABILITÄTSMATRIX" : "INTEROPERABILITY MATRIX"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              {language === "de"
                ? "Für native industrielle Interoperabilität entwickelt"
                : "Designed for Native Industrial Interoperability"}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {language === "de"
                ? "Apollo-Hardware und -Software integrieren sich nahtlos in bestehende Substation-Architekturen."
                : "Apollo hardware and software integrate seamlessly into existing brownfield and greenfield substation architectures."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Product</th>
                  <th className="py-3 px-4 font-bold">Deployment Type</th>
                  <th className="py-3 px-4 font-bold">Key Protocols</th>
                  <th className="py-3 px-4 font-bold">Sampling / Accuracy</th>
                  <th className="py-3 px-4 font-bold">Security / Standards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Apollo Gateway Pro</td>
                  <td className="py-3.5 px-4 text-green-600">Substation / Edge (IP67)</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">Modbus, BACnet, CAN, LoRa</td>
                  <td className="py-3.5 px-4 text-gray-500">Sub-second registers</td>
                  <td className="py-3.5 px-4 text-emerald-600">IEC 62443-4-2, TPM 2.0</td>
                </tr>
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Apollo Pulse Analyzer</td>
                  <td className="py-3.5 px-4 text-green-600">DIN Rail / Panel Mount</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">Modbus TCP/RTU, DNP3</td>
                  <td className="py-3.5 px-4 text-gray-500">Class 0.2S (256 s/c)</td>
                  <td className="py-3.5 px-4 text-emerald-600">IEC 61000-4-30 Class A</td>
                </tr>
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Apollo GridOS Cloud</td>
                  <td className="py-3.5 px-4 text-green-600">European Cloud / On-Prem</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">Kafka, MQTT, REST, WSS</td>
                  <td className="py-3.5 px-4 text-gray-500">&lt; 250ms latency SLA</td>
                  <td className="py-3.5 px-4 text-emerald-600">ISO 27001, SOC 2, GDPR</td>
                </tr>
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Apollo OptiStorage</td>
                  <td className="py-3.5 px-4 text-green-600">Microgrid BESS Controller</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">SunSpec, OpenADR, CANopen</td>
                  <td className="py-3.5 px-4 text-gray-500">&lt; 20ms islanding dispatch</td>
                  <td className="py-3.5 px-4 text-emerald-600">UL 9540A Verified</td>
                </tr>
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Predictive Sentry</td>
                  <td className="py-3.5 px-4 text-green-600">Magnetic Mount / ATEX</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">BLE 5.2 Mesh, Wirepas</td>
                  <td className="py-3.5 px-4 text-gray-500">10 kHz Triaxial MEMS</td>
                  <td className="py-3.5 px-4 text-emerald-600">ATEX Zone 2 / IECEx</td>
                </tr>
                <tr className="hover:bg-green-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Carbon Sentinel</td>
                  <td className="py-3.5 px-4 text-green-600">Cloud ESG Ledger SaaS</td>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">SAP, Oracle, ESG API</td>
                  <td className="py-3.5 px-4 text-gray-500">Hourly Scope 1, 2, 3</td>
                  <td className="py-3.5 px-4 text-emerald-600">EU CSRD & GHG Protocol</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-green-600 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "de"
                ? "Individuelle Substation-Spezifikation benötigt?"
                : "Need a Custom Substation or Factory Specification?"}
            </h3>
            <p className="text-green-100 text-sm mt-1 max-w-xl">
              {language === "de"
                ? "Unser Systems-Engineering-Team prüft Ihr Einlinienschaltbild und konfiguriert die optimale Hardware- und Telemetrietopologie."
                : "Our systems engineering team will review your single-line diagram (SLD) and configure the optimal hardware & telemetry topology."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-green-50 text-green-700 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>{language === "de" ? "Machbarkeitsberatung buchen" : "Book Feasibility Call"}</span>
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
