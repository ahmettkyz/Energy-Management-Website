"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";
import { ArrowUpRight } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-3xl bg-gradient-to-b from-[#09152B] to-[#060F1E] border border-blue-900/40 hover:border-cyan-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
    >
      <div>
        {/* Avatar / Initials & LinkedIn */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/30 transition-all">
            <div className="w-full h-full bg-[#08101E] rounded-[14px] flex items-center justify-center text-white font-extrabold text-xl tracking-wider">
              {member.avatarInitials}
            </div>
          </div>

          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-800/60 hover:bg-blue-600 hover:border-transparent text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </a>
        </div>

        {/* Member name & Role */}
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {member.name}
        </h3>
        <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
          {member.role}
        </div>

        {/* Bio */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Key Focus Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
          {member.focus.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors mt-6 pt-4 border-t border-slate-800/50"
      >
        <span>Connect on LinkedIn</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
}
