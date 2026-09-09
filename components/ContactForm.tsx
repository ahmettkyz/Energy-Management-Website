"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  solution: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    solution: "Apollo Gateway Pro & Hardware",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        language === "tr" ? "Lütfen adınızı ve soyadınızı giriniz." : "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email =
        language === "tr" ? "Lütfen kurumsal e-posta adresinizi giriniz." : "Please enter your work email.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        language === "tr" ? "Geçerli bir e-posta adresi yazınız." : "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company =
        language === "tr" ? "Lütfen şirket veya kurum adını belirtiniz." : "Please specify your company.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        language === "tr"
          ? "Mesajınız en az 10 karakter uzunluğunda olmalıdır."
          : "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38BDF8", "#2563EB", "#00F0FF", "#10B981"],
      });
    } catch {
      // safe fallback
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      solution: "Apollo Gateway Pro & Hardware",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/50 shadow-2xl relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {language === "tr" ? "Mesajınız Alındı!" : "Inquiry Received!"}
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              {language === "tr"
                ? `Teşekkürler Sayın ${formData.fullName}. Apollo mühendislik ekibimiz 24 saat içinde sizinle iletişime geçerek tesisinize özel teknik fizibilite detaylarını iletecektir.`
                : `Thank you, ${formData.fullName}. Our engineering team in Germany and Greece will review your technical requirements and contact you within 24 hours.`}
            </p>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700"
            >
              {language === "tr" ? "Yeni Bir Mesaj Gönder" : "Send Another Inquiry"}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {language === "tr" ? "Ad Soyad *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder={language === "tr" ? "Örn. Ahmet Yılmaz" : "e.g. Dr. Markus Weber"}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-500/80 focus:border-red-400"
                      : "border-slate-800 focus:border-cyan-400"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {language === "tr" ? "Kurumsal E-Posta *" : "Work Email *"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder={language === "tr" ? "ad.soyad@sirket.com" : "name@enterprise.com"}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500/80 focus:border-red-400"
                      : "border-slate-800 focus:border-cyan-400"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {language === "tr" ? "Şirket / Tesis Adı *" : "Company / Facility *"}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: undefined });
                  }}
                  placeholder={language === "tr" ? "Şirketinizin Adı" : "Your Organization"}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.company
                      ? "border-red-500/80 focus:border-red-400"
                      : "border-slate-800 focus:border-cyan-400"
                  }`}
                />
                {errors.company && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.company}</span>
                  </p>
                )}
              </div>

              {/* Solution of Interest */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {language === "tr" ? "İlgilendiğiniz Çözüm" : "Solution of Interest"}
                </label>
                <select
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Apollo Gateway Pro & Hardware">Apollo Gateway Pro (Hardware)</option>
                  <option value="Apollo Pulse Analyzer">Apollo Pulse Analyzer (Class 0.2S)</option>
                  <option value="Apollo GridOS Platform">Apollo GridOS Cloud SaaS</option>
                  <option value="Apollo OptiStorage (BESS)">Apollo OptiStorage BESS</option>
                  <option value="Predictive Sentry">Predictive Motor Sentry (IoT)</option>
                  <option value="Carbon Sentinel">Carbon Sentinel (Scope 1-3 ESG)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {language === "tr" ? "Mesajınız / Teknik İhtiyaçlarınız *" : "Project Details & Message *"}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder={
                  language === "tr"
                    ? "Tesisinizin enerji tüketim kapasitesi, mevcut ölçüm altyapısı ve hedefleriniz hakkında kısa bilgi veriniz..."
                    : "Describe your facility size, peak loads, metering requirements, or ESG targets..."
                }
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? "border-red-500/80 focus:border-red-400"
                    : "border-slate-800 focus:border-cyan-400"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{language === "tr" ? "İletiliyor..." : "Submitting..."}</span>
                </>
              ) : (
                <>
                  <span>{language === "tr" ? "Talebi Gönder" : "Send Inquiry"}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
