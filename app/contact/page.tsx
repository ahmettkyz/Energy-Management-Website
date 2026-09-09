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
    <div className="min-h-screen bg-[#f8faf9] text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === "de" ? "DIREKTKONTAKT" : "DIRECT CONTACT"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            {language === "de" ? "Kontakt zu Apollo-Ingenieuren" : "Connect With Apollo Engineers"}
          </h1>

          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            {language === "de"
              ? "Ob Sie eine Einlinienschaltplan-Beratung, Klasse 0.2S Messproben oder einen Enterprise-Pilottest benötigen – unsere Ingenieure helfen gerne."
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
            <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {language === "de" ? "Deutschland Entwicklungszentrum" : "Germany Engineering Center"}
                  </h3>
                  <p className="text-[11px] text-green-600 font-semibold uppercase tracking-wider">
                    Stuttgart Hub
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Stuttgart, Baden-Württemberg, Germany</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-green-500 shrink-0" />
                  <a href="tel:+4971192538100" className="hover:text-green-700 transition-colors">
                    +49 711 9253 8100
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Mon - Fri: 08:30 - 18:00 (CET)</span>
                </div>
              </div>
            </div>

            {/* Greece Office Card */}
            <div className="p-6 rounded-2xl bg-white border border-teal-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-600">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {language === "de" ? "Griechenland Operationszentrum" : "Greece Operations Hub"}
                  </h3>
                  <p className="text-[11px] text-teal-600 font-semibold uppercase tracking-wider">
                    Athens Facility
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>Athens, Attica, Greece</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  <a href="mailto:info@apollo-gs.com" className="hover:text-teal-700 transition-colors">
                    info@apollo-gs.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Mon - Fri: 09:00 - 18:30 (EET)</span>
                </div>
              </div>
            </div>

            {/* Book a Meeting Card */}
            <div className="p-6 rounded-2xl bg-green-600 border border-green-500 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-green-200" />
                <h4 className="text-white font-bold text-sm">
                  {language === "de" ? "Online-Meeting buchen" : "Book an Online Meeting"}
                </h4>
              </div>
              <p className="text-xs text-green-100 mb-4 leading-relaxed">
                {language === "de"
                  ? "Überspringen Sie das Formular und wählen Sie einen verfügbaren 30-Minuten-Slot in unserem Kalender."
                  : "Skip the form and select an available 30-minute slot on our calendar."}
              </p>
              <a
                href="https://www.apollo-gs.com/book-a-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-green-200 uppercase tracking-wider transition-colors"
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
