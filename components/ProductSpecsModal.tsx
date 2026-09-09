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
          className="relative w-full max-w-3xl bg-[#091325] border border-blue-800/60 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-950/80 via-[#0C1A36] to-blue-950/80 border-b border-blue-900/40 flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                {product.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.name}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {product.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {/* Overview */}
            <div>
              <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2">
                {language === "tr" ? "ÜRÜN GENEL BAKIŞI" : "SYSTEM ARCHITECTURE"}
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {product.fullOverview}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-3">
                {language === "tr" ? "ÖNE ÇIKAN MÜHENDİSLİK AVANTAJLARI" : "ENGINEERING HIGHLIGHTS"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-3">
                {language === "tr" ? "TEKNİK ÖZELLİKLER TABLOSU" : "DETAILED SPECIFICATION TABLE"}
              </h4>
              <div className="rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-800">
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-slate-900/50" : "bg-slate-950/50"}
                      >
                        <td className="py-3 px-4 font-semibold text-slate-300 w-1/3">
                          {spec.name}
                        </td>
                        <td className="py-3 px-4 text-cyan-200 font-mono">
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
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {language === "tr" ? "Protokol Desteği" : "Supported Protocols"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.protocols.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-blue-900/40 text-[11px] font-mono text-cyan-300 border border-blue-800/40"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.certifications && (
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {language === "tr" ? "Sertifikasyonlar" : "Industrial Certifications"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.certifications.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-emerald-950/40 text-[11px] font-mono text-emerald-300 border border-emerald-800/40"
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
          <div className="p-6 bg-[#070F1E] border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownloadDatasheet}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">
                    {language === "tr" ? "PDF İndirildi (Simülasyon)" : "Datasheet Downloaded"}
                  </span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>
                    {language === "tr" ? "Teknik Broşürü İndir (PDF)" : "Download PDF Datasheet"}
                  </span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
            >
              <span>{language === "tr" ? "Fiyat & Numune Talep Et" : "Request Quote & Sample"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
