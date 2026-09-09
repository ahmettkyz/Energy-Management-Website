"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ArrowRight, Check, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#03060E] border-t border-blue-900/40 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#08101E] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                apollo
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block ml-1"></span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Germany (Stuttgart) & Greece (Athens)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+49 711 9253 8100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>info@apollo-gs.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {t.footer.products}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/products#apollo-gateway-pro" className="hover:text-cyan-400 transition-colors">
                  Apollo Gateway Pro
                </Link>
              </li>
              <li>
                <Link href="/products#apollo-pulse-analyzer" className="hover:text-cyan-400 transition-colors">
                  Apollo Pulse Analyzer
                </Link>
              </li>
              <li>
                <Link href="/products#apollo-gridos" className="hover:text-cyan-400 transition-colors">
                  Apollo GridOS Cloud
                </Link>
              </li>
              <li>
                <Link href="/products#apollo-optistorage" className="hover:text-cyan-400 transition-colors">
                  Apollo OptiStorage (BESS)
                </Link>
              </li>
              <li>
                <Link href="/products#apollo-predictive-sentry" className="hover:text-cyan-400 transition-colors">
                  Predictive Motor Sentry
                </Link>
              </li>
              <li>
                <Link href="/products#apollo-carbon-sentinel" className="hover:text-cyan-400 transition-colors">
                  Carbon Sentinel (ESG)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  {language === "tr" ? "Hakkımızda & Misyon" : "About Us & Mission"}
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-cyan-400 transition-colors">
                  {language === "tr" ? "Mühendislik Ekibimiz" : "Leadership & Team"}
                </Link>
              </li>
              <li>
                <Link href="/about#timeline" className="hover:text-cyan-400 transition-colors">
                  {language === "tr" ? "Kuruluş Hikayesi (2023)" : "Founding Story (2023)"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  {language === "tr" ? "Görüşme Planla" : "Book a Meeting"}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/apollo-gs/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === "tr" ? "Kaydınız başarıyla alındı!" : "Thank you for subscribing!"}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Apollo Green Solutions. {t.footer.rights}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Legal Notice
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
