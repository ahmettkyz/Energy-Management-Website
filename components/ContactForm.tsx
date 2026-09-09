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
        language === "de" ? "Bitte geben Sie Ihren vollständigen Namen ein." : "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email =
        language === "de" ? "Bitte geben Sie Ihre geschäftliche E-Mail ein." : "Please enter your work email.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        language === "de" ? "Bitte geben Sie eine gültige E-Mail-Adresse ein." : "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company =
        language === "de" ? "Bitte geben Sie Ihren Firmennamen an." : "Please specify your company.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        language === "de"
          ? "Nachricht muss mindestens 10 Zeichen lang sein."
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
        colors: ["#16a34a", "#22c55e", "#4ade80", "#10B981"],
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
    <div className="w-full max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-green-100 shadow-xl relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-100 border border-green-200 text-green-600 mx-auto flex items-center justify-center mb-6 shadow-lg shadow-green-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {language === "de" ? "Anfrage erhalten!" : "Inquiry Received!"}
            </h3>

            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              {language === "de"
                ? `Vielen Dank, ${formData.fullName}. Unser Ingenieurteam in Deutschland und Griechenland prüft Ihre Anforderungen und meldet sich innerhalb von 24 Stunden.`
                : `Thank you, ${formData.fullName}. Our engineering team in Germany and Greece will review your technical requirements and contact you within 24 hours.`}
            </p>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 text-xs font-bold transition-all border border-green-200"
            >
              {language === "de" ? "Neue Anfrage senden" : "Send Another Inquiry"}
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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {language === "de" ? "Name *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder={language === "de" ? "z.B. Dr. Markus Weber" : "e.g. Dr. Markus Weber"}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 text-sm placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {language === "de" ? "Geschäftliche E-Mail *" : "Work Email *"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder={language === "de" ? "name@unternehmen.com" : "name@enterprise.com"}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 text-sm placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {language === "de" ? "Unternehmen / Einrichtung *" : "Company / Facility *"}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: undefined });
                  }}
                  placeholder={language === "de" ? "Ihr Unternehmen" : "Your Organization"}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 text-sm placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.company
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                {errors.company && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.company}</span>
                  </p>
                )}
              </div>

              {/* Solution of Interest */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {language === "de" ? "Gewünschte Lösung" : "Solution of Interest"}
                </label>
                <select
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-green-500 transition-colors"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                {language === "de" ? "Projektdetails & Nachricht *" : "Project Details & Message *"}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder={
                  language === "de"
                    ? "Beschreiben Sie Ihre Anlagengröße, Spitzenlasten, Messanforderungen oder ESG-Ziele..."
                    : "Describe your facility size, peak loads, metering requirements, or ESG targets..."
                }
                className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 text-sm placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-green-500"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-green-500/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{language === "de" ? "Wird gesendet..." : "Submitting..."}</span>
                </>
              ) : (
                <>
                  <span>{language === "de" ? "Anfrage senden" : "Send Inquiry"}</span>
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
