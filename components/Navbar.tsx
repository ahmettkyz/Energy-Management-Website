"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Leaf, Globe, ArrowUpRight } from "lucide-react";
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
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-green-700 via-green-500 to-emerald-400 p-[1.5px] shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-1">
                apollo
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold -mt-1">
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
                      ? "text-green-700 font-semibold"
                      : "text-gray-600 hover:text-green-700"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-600 to-emerald-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Menu Drawer Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-3 py-1.5 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:border-green-400 flex items-center gap-1.5 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-green-600" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* CTA Button Desktop */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-md shadow-green-500/20 hover:shadow-green-500/30 active:scale-95"
            >
              <span>{t.nav.bookMeeting}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Menu Drawer Toggle Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation drawer"
              className="lg:hidden w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 hover:bg-green-50 flex flex-col items-center justify-center gap-1.5 text-gray-500 hover:text-green-700 transition-all duration-200 group"
            >
              <span className="w-5 h-[2px] bg-gray-400 group-hover:bg-green-600 transition-colors"></span>
              <span className="w-5 h-[2px] bg-gray-400 group-hover:bg-green-600 transition-colors"></span>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white border-l border-green-100 shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                {/* Header with Close button */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-gray-900 tracking-wide">apollo</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Green Solutions</span>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
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
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    );
                  })}
                </nav>

                {/* Quick Info Box */}
                <div className="mt-10 p-5 rounded-2xl bg-green-50 border border-green-100">
                  <div className="text-xs uppercase tracking-wider text-green-700 font-bold mb-2">
                    Engineering Centers
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {language === "de"
                      ? "Entwicklung von B2B-Industrie-Energielösungen in Stuttgart (Deutschland) und Athen (Griechenland)."
                      : "Developing enterprise energy hardware & cloud software across Stuttgart, Germany and Athens, Greece."}
                  </p>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">Language</span>
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded-lg bg-green-100 border border-green-200 text-green-700 text-xs font-bold hover:bg-green-200 transition-colors"
                  >
                    {language === "de" ? "DE (Deutsch)" : "EN (English)"}
                  </button>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 transition-all"
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
