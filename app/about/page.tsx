"use client";

import React from "react";
import { motion } from "framer-motion";
import { teamMembers, companyTimeline } from "@/data/team";
import TeamCard from "@/components/TeamCard";
import {
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f8faf9] text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === "de" ? "UNTERNEHMENSGESCHICHTE" : "COMPANY STORY"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            {language === "de" ? "Über Apollo Green Solutions" : "About Apollo Green Solutions"}
          </h1>

          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            {language === "de"
              ? "Wir machen den unsichtbaren Energiefluss sichtbar und nachhaltig. Erfahren Sie, wie unsere Mission und technische Expertise die europäische Energiewende vorantreiben."
              : "We make the invisible flow of energy visible and sustainable. Learn how our mission, core values, and engineering expertise are driving the European energy transition forward."}
          </p>
        </div>

        {/* Core Narrative / Duality from apollo-gs.com/about-us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-gray-600 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                <span>
                  {language === "de"
                    ? "Gegründet im Januar 2023"
                    : "Founded in January 2023"}
                </span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === "de"
                  ? "Apollo Green Solutions wurde im Januar 2023 von Rafail Kasapis in Deutschland und Griechenland gegründet und ist in beiden Regionen aktiv tätig. Was als PV-Installationsunternehmen begann, entwickelte sich schnell zu einem Beratungs- und Engineering-Softwarehaus. Wir helfen mittelständischen und großen Unternehmen dabei, Energieeinspartechniken umzusetzen. Unser Produkt ist dabei nicht nur eine Softwareplattform, sondern auch die dazugehörige Hardware."
                  : "Apollo Green Solutions was founded in January 2023 by Rafail Kasapis in Germany and Greece, with ongoing operations in both regions. What started as a PV installation company soon pivoted to become a consultancy and engineering software house. We help medium and large companies implement energy-saving techniques through our software and hardware. This means our product isn't just a software platform, but also the hardware that accompanies it."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {language === "de"
                  ? "Die Dualität: Strahlende Sonne & klarsichtige Prophetie"
                  : "The Duality: Blazing Sun & Clear-Sighted Prophecy"}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === "de"
                  ? "In der griechischen Mythologie war Apollo der Gott zweier mächtiger Bereiche: der strahlenden Energie der Sonne und der klarsichtigen Gabe der Prophetie. Bei Apollo Green Solutions haben wir unsere gesamte Philosophie auf genau dieser Dualität aufgebaut. Wir sind Pioniere in der Einbringung intelligenter Voraussicht in Ihr Energienetz."
                  : "In ancient Greek mythology, Apollo was celebrated as the god of two powerful domains: the blazing energy of the sun and the clear-sighted gift of prophecy. At Apollo Green Solutions, we built our entire philosophy around this exact duality. We believe mastering the modern energy landscape requires the 'prophecy' of deep data—the foresight to know exactly when, where, and how that power is being used."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Mission Box */}
            <div className="p-8 rounded-3xl bg-white border border-green-100 shadow-lg relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-green-100 border border-green-200 text-green-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {language === "de" ? "Unsere Mission" : "Our Mission"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {language === "de"
                  ? "Unsere Mission ist klar: nachhaltiges und effizientes Energiemanagement für jedes Unternehmen zugänglich zu machen. Wir beleuchten Ihre blinden Flecken und bieten die Voraussicht, Ihre Energiezukunft zu sichern."
                  : "Our mission is straightforward: to make sustainable and efficient energy management accessible and actionable for every enterprise. We bring light to your blind spots and the foresight to secure your energy future."}
              </p>
            </div>

            {/* Bridging Physical & Digital Box */}
            <div className="p-8 rounded-3xl bg-white border border-teal-100 shadow-lg relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-teal-100 border border-teal-200 text-teal-600 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {language === "de"
                  ? "Brücke zwischen Physik und Digital"
                  : "Bridging the Gap Between Physical and Digital"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === "de"
                  ? "Energiemanagement war lange ein Rätselraten. Apollo Green Solutions wurde gegründet, um das Rätselraten zu eliminieren. Wir entwickeln, konstruieren und installieren End-to-End-Energiemanagementsysteme, die Ihnen die vollständige Kontrolle über Ihren Verbrauch geben."
                  : "For too long, energy management has been a guessing game. Apollo Green Solutions was founded to eliminate the guesswork. We design, engineer, and deploy end-to-end energy management systems that give you total control over your consumption."}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>{language === "de" ? "FÜHRUNG & TECHNIK" : "LEADERSHIP & ENGINEERING"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {language === "de" ? "Unser wundervolles Team" : "Meet our Wonderful Team"}
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              {language === "de"
                ? "Unsere multidisziplinären Führungskräfte und Ingenieure treiben die Energievoraussicht in Deutschland und Griechenland voran."
                : "The multidisciplinary leaders and engineers advancing energy foresight across Germany and Greece."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/company/apollo-gs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-green-500/20"
            >
              <span>Follow Us on LinkedIn!</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Company Timeline */}
        <div id="timeline" className="p-8 sm:p-12 rounded-3xl bg-white border border-green-100 shadow-xl mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-bold text-green-600 tracking-wider">
              {language === "de" ? "DIE APOLLO-REISE" : "THE APOLLO JOURNEY"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              {language === "de" ? "Von Solarwurzeln zur Enterprise GridOS" : "From Solar Roots to Enterprise Energy GridOS"}
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-green-100">
            {companyTimeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-6 sm:gap-8">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 border-4 border-white flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-colors">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-green-600 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "de"
                ? "Direkte Beratung mit unserem Team vereinbaren"
                : "Schedule a Direct Executive Briefing"}
            </h3>
            <p className="text-green-100 text-sm mt-1 max-w-xl">
              {language === "de"
                ? "Treten Sie direkt mit unserem Ingenieur- und Betriebsteam in Deutschland oder Griechenland in Kontakt."
                : "Connect directly with our engineering and operations team in Germany or Greece."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-green-50 text-green-700 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>{language === "de" ? "Termin buchen" : "Book a Meeting"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
