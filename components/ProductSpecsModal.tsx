"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Check, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface ProductSpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductSpecsModal({ product, onClose }: ProductSpecsModalProps) {
  const [downloaded, setDownloaded] = useState(false);
  const { language } = useLanguage();

  if (!product) return null;

  const handleDownloadDatasheet = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white border border-green-100 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-green-50 via-white to-green-50 border-b border-green-100 flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-2">
                {product.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {product.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {/* Overview */}
            <div>
              <h4 className="text-xs uppercase font-bold text-green-600 tracking-wider mb-2">
                {language === "de" ? "SYSTEMARCHITEKTUR" : "SYSTEM ARCHITECTURE"}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {product.fullOverview}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xs uppercase font-bold text-green-600 tracking-wider mb-3">
                {language === "de" ? "TECHNISCHE HIGHLIGHTS" : "ENGINEERING HIGHLIGHTS"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-green-50 border border-green-100 flex items-start gap-2.5 text-xs text-gray-700"
                  >
                    <ShieldCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h4 className="text-xs uppercase font-bold text-green-600 tracking-wider mb-3">
                {language === "de" ? "SPEZIFIKATIONSTABELLE" : "DETAILED SPECIFICATION TABLE"}
              </h4>
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-gray-100">
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-semibold text-gray-600 w-1/3">
                          {spec.name}
                        </td>
                        <td className="py-3 px-4 text-green-700 font-mono">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Protocols & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.protocols && (
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {language === "de" ? "Protokollunterstützung" : "Supported Protocols"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.protocols.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-green-100 text-[11px] font-mono text-green-700 border border-green-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.certifications && (
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {language === "de" ? "Industriezertifizierungen" : "Industrial Certifications"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.certifications.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-emerald-50 text-[11px] font-mono text-emerald-700 border border-emerald-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownloadDatasheet}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-gray-200"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600">
                    {language === "de" ? "PDF heruntergeladen" : "Datasheet Downloaded"}
                  </span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-green-600" />
                  <span>
                    {language === "de" ? "PDF Datenblatt herunterladen" : "Download PDF Datasheet"}
                  </span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-green-500/20 transition-all"
            >
              <span>{language === "de" ? "Angebot & Muster anfordern" : "Request Quote & Sample"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
