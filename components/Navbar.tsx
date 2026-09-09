"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap, Globe, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#060D1A]/85 backdrop-blur-md border-b border-blue-900/30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#08101E] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                apollo
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                Green Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Menu Drawer Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Button (matches the 'TR' badge in screenshot) */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-3 py-1.5 rounded-lg border border-blue-500/40 bg-blue-950/40 hover:bg-blue-900/60 text-slate-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:border-cyan-400/60 hover:text-cyan-300 flex items-center gap-1.5 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* CTA Button Desktop */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold tracking-wide hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 active:scale-95"
            >
              <span>{t.nav.bookMeeting}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Menu Drawer Toggle Button (two horizontal lines matching the reference screenshot) */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation drawer"
              className="w-10 h-10 rounded-lg border border-slate-700/60 bg-slate-900/40 hover:bg-slate-800/60 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white transition-all duration-200 group"
            >
              <span className="w-5 h-[2px] bg-slate-300 group-hover:bg-cyan-400 transition-colors"></span>
              <span className="w-5 h-[2px] bg-slate-300 group-hover:bg-cyan-400 transition-colors"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer Menu */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#070E1B] border-l border-blue-900/40 shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                {/* Header with Close button */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold text-white tracking-wide">apollo</span>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links in Drawer */}
                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                        className={`px-4 py-3.5 rounded-xl font-medium text-base flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-blue-600/20 text-cyan-400 border border-blue-500/30"
                            : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </Link>
                    );
                  })}
                </nav>

                {/* Quick Info Box */}
                <div className="mt-10 p-5 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">
                    {language === "tr" ? "Mühendislik Merkezleri" : "Engineering Centers"}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === "tr"
                      ? "Stuttgart (Almanya) ve Atina (Yunanistan) tesislerimizde B2B endüstriyel enerji çözümleri geliştiriyoruz."
                      : "Developing enterprise energy hardware & cloud software across Stuttgart, Germany and Athens, Greece."}
                  </p>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-400">
                    {language === "tr" ? "Dil Seçimi" : "Language"}
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded bg-blue-900/40 border border-blue-500/30 text-cyan-400 text-xs font-bold"
                  >
                    {language === "tr" ? "TR (Türkçe)" : "EN (English)"}
                  </button>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:from-blue-500 hover:to-cyan-500 transition-all"
                >
                  <span>{t.nav.bookMeeting}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
