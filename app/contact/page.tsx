"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === "tr" ? "İLETİŞİM & DESTEK" : "DIRECT CONTACT"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {language === "tr" ? "Mühendislik Ekibimizle İletişime Geçin" : "Connect With Apollo Engineers"}
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {language === "tr"
              ? "Tesisinizin tek hat şemasını değerlendirmek, Class 0.2S sayaç numunesi istemek veya Apollo GridOS canlı demosunu başlatmak için formu doldurabilirsiniz."
              : "Whether you need single-line diagram consultation, Class 0.2S meter samples, or an enterprise pilot trial, our engineers are ready to assist."}
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Dual Headquarters & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Germany Office Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/50 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    {language === "tr" ? "Almanya Mühendislik Merkezi" : "Germany Engineering Center"}
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
                    Stuttgart Hub
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Stuttgart, Baden-Württemberg, Germany</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+4971192538100" className="hover:text-white transition-colors">
                    +49 711 9253 8100
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mon - Fri: 08:30 - 18:00 (CET)</span>
                </div>
              </div>
            </div>

            {/* Greece Office Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/50 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    {language === "tr" ? "Yunanistan Operasyon Merkezi" : "Greece Operations Hub"}
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
                    Athens Facility
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Athens, Attica, Greece</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="mailto:info@apollo-gs.com" className="hover:text-white transition-colors">
                    info@apollo-gs.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mon - Fri: 09:00 - 18:30 (EET)</span>
                </div>
              </div>
            </div>

            {/* Book a Meeting Direct Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/70 to-cyan-950/40 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-bold text-sm">
                  {language === "tr" ? "Online Takvim Üzerinden Randevu" : "Book an Online Meeting"}
                </h4>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === "tr"
                  ? "Doğrudan teknik uzmanlarımızla 30 dakikalık video görüşmesi planlayın."
                  : "Skip the form and select an available 30-minute slot on our calendar."}
              </p>
              <a
                href="https://www.apollo-gs.com/book-a-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider"
              >
                <span>apollo-gs.com/book-a-meeting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
