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
  Building2,
  Cpu,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === "tr" ? "KURUMSAL KİMLİK" : "COMPANY STORY"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {language === "tr" ? "Hakkımızda & Vizyonumuz" : "About Apollo Green Solutions"}
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {language === "tr"
              ? "Görünmeyen enerji akışını görünür, yönetilebilir ve sürdürülebilir kılıyoruz. Donanım ve yapay zeka yazılımını birleştirerek Avrupa enerji dönüşümüne öncülük ediyoruz."
              : "We make the invisible flow of energy visible and sustainable. Learn how our mission, core values, and engineering expertise are driving the European energy transition forward."}
          </p>
        </div>

        {/* Core Narrative / Duality from apollo-gs.com/about-us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-900/50">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>
                  {language === "tr"
                    ? "Kuruluş & Hikayemiz (Ocak 2023)"
                    : "Founded in January 2023"}
                </span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === "tr"
                  ? "Apollo Green Solutions, Ocak 2023'te Rafail Kasapis tarafından Almanya ve Yunanistan'da kuruldu ve her iki bölgede de aktif operasyonlarını sürdürmektedir. Fotovoltaik kurulum şirketi olarak başlayan yolculuğumuz, kısa sürede bir danışmanlık ve teknoloji yazılım/donanım evine dönüştü. Orta ve büyük ölçekli sanayi kuruluşlarının enerji tasarrufu tekniklerini hayata geçirmelerine yardımcı oluyoruz. Bu doğrultuda ürünümüz yalnızca bir yazılım platformu değil, ona eşlik eden sahada kanıtlanmış endüstriyel donanımdır."
                  : "Apollo Green Solutions was founded in January 2023 by Rafail Kasapis in Germany and Greece, with ongoing operations in both regions. What started as a PV installation company soon pivoted to become a consultancy and engineering software house. We help medium and large companies implement energy-saving techniques through our software and hardware. This means our product isn't just a software platform, but also the hardware that accompanies it."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#091428] border border-blue-800/40">
              <h2 className="text-xl font-bold text-white mb-2">
                {language === "tr"
                  ? "Güneş ve Kehanetin Gücü (Apollo Mitolojisi)"
                  : "The Duality: Blazing Sun & Clear-Sighted Prophecy"}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === "tr"
                  ? "Antik Yunan mitolojisinde Apollo iki güçlü alanın tanrısı olarak yüceltilirdi: Güneşin yakıcı saf enerjisi ve geleceği berrak gören kehanet yeteneği. Apollo Green Solutions olarak tüm felsefemizi bu ikilik üzerine kurduk. Modern enerji dünyasını yönetmenin yalnızca ham güçten fazlasını gerektirdiğine inanıyoruz; enerjinin ne zaman, nerede ve nasıl kullanıldığını önceden bilmeyi sağlayan 'derin veri kehanetini' gerektirir. Bizler mit yaratıcısı değiliz, ancak enerji şebekenize akıllı öngörü getiren öncüleriz."
                  : "In ancient Greek mythology, Apollo was celebrated as the god of two powerful domains: the blazing energy of the sun and the clear-sighted gift of prophecy. At Apollo Green Solutions, we built our entire philosophy around this exact duality. We believe that mastering the modern energy landscape requires more than just raw power. It requires the 'prophecy' of deep data—the foresight to know exactly when, where, and how that power is being used. We aren't myth-makers, but we are pioneers in bringing intelligent foresight to your energy grid."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Our Mission Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0C1A36] to-[#070F1F] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {language === "tr" ? "Misyonumuz" : "Our Mission"}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {language === "tr"
                  ? "Misyonumuz nettir: Sürdürülebilir ve verimli enerji yönetimini her işletme için erişilebilir ve uygulanabilir kılmak. İster karbon ayak izinizi azaltmak, ister agresif ESG (Çevresel, Sosyal ve Kurumsal Yönetişim) hedeflerine ulaşmak, ister operasyonel maliyetlerinizi düşürmek isteyin, sizi oraya taşıyacak araçları sağlıyoruz. Kör noktalarınıza ışık tutuyor ve enerji geleceğinizi güvence altına alacak öngörüyü sunuyoruz."
                  : "Our mission is straightforward: to make sustainable and efficient energy management accessible and actionable for every enterprise. Whether you are looking to reduce your carbon footprint, hit aggressive ESG targets, or simply slash your operational overhead, we provide the tools to get you there. We bring light to your blind spots and the foresight to secure your energy future."}
              </p>
            </div>

            {/* Bridging Physical & Digital Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0C1A36] to-[#070F1F] border border-blue-600/30 shadow-2xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {language === "tr"
                  ? "Fiziksel ile Dijital Arasındaki Köprü"
                  : "Bridging the Gap Between Physical and Digital"}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {language === "tr"
                  ? "Uzun zamandır enerji yönetimi bir tahmin oyunundan ibaretti. Tesisler görülmeyen verimsizlikler yüzünden sermaye tüketiyor, elektrik şebekeleri ise öngörülemeyen talep altında zorlanıyordu. Apollo Green Solutions tahmin yürütmeyi ortadan kaldırmak için kuruldu. Tüketiminiz üzerinde tam kontrol sağlayan uçtan uca enerji yönetim sistemleri tasarlıyor, mühendisliğini yapıyor ve sahaya kuruyoruz."
                  : "For too long, energy management has been a guessing game. Facilities burn through capital due to unseen inefficiencies, and power grids strain under unpredictable demand. Apollo Green Solutions was founded to eliminate the guesswork. We design, engineer, and deploy end-to-end energy management systems that give you total control over your consumption."}
              </p>
            </div>
          </div>
        </div>

        {/* Meet our Wonderful Team Section from apollo-gs.com/about-us */}
        <div id="team" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>{language === "tr" ? "YÖNETİM & MÜHENDİSLİK" : "LEADERSHIP & ENGINEERING"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {language === "tr" ? "Harika Ekibimizle Tanışın" : "Meet our Wonderful Team"}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {language === "tr"
                ? "Almanya ve Yunanistan merkezli, enerji dönüşümünü donanım ve yazılımla şekillendiren kurucu kadromuz."
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700/50 text-cyan-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Follow Us on LinkedIn!</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Company Timeline */}
        <div id="timeline" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/50 shadow-2xl mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              {language === "tr" ? "KURULUŞTAN BUGÜNE" : "THE APOLLO JOURNEY"}
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              {language === "tr" ? "Gelişim & Büyüme Çizelgemiz" : "From Solar Roots to Enterprise Energy GridOS"}
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-blue-800/40">
            {companyTimeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-6 sm:gap-8">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 border-4 border-[#09152B] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-blue-500/40">
                  <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-blue-950/60 to-cyan-950/40 border border-blue-700/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "tr"
                ? "Apollo Yönetim Ekibiyle Doğrudan Görüşün"
                : "Schedule a Direct Executive Briefing"}
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              {language === "tr"
                ? "Tesisinizin ESG ve maliyet hedeflerini konuşmak için bir toplantı ayarlayın."
                : "Connect directly with our engineering and operations team in Germany or Greece."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-white/10 shrink-0 flex items-center gap-2"
          >
            <span>{language === "tr" ? "Görüşme Planla" : "Book a Meeting"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
