"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ── Signature "SB" logo ────────────────────────────────────────────────────────

const SBLogo = () => (
  <span
    className="text-5xl text-[#C3E41D]"
    style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
  >
    SB
  </span>
);

// ── Types ──────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  className?: string;
}

// ── Component ──────────────────────────────────────────────────────────────────

export const Footer = ({
  brandName = "Sneha Banik",
  brandDescription = "Aspiring Web Developer & UI/UX Designer crafting responsive, intuitive, and modern user experiences.",
  socialLinks = [],
  navLinks = [],
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-white/5 bg-[#050505] relative overflow-hidden">

        {/* ── Main content ────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto relative px-6 pt-10 pb-6 flex flex-col">

          {/* Top row: SB logo (left) | brand info (center) | nav links (right) */}
          <div className="flex items-start justify-between gap-8 w-full">

            {/* LEFT — SB logo badge */}
            <div className="shrink-0 hover:border-[#C3E41D]/40 duration-300 drop-shadow-[0_0px_20px_rgba(195,228,29,0.15)] backdrop-blur-sm rounded-3xl bg-black/60 border-2 border-white/10 flex items-center justify-center p-3 z-10 self-start">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                <SBLogo />
              </div>
            </div>

            {/* CENTER — brand name, description, social icons */}
            <div className="flex flex-col items-center gap-3 flex-1 min-w-0">
              <span className="text-white text-2xl sm:text-3xl font-bold text-center whitespace-nowrap">
                {brandName}
              </span>
              <p className="text-neutral-400 font-medium text-center text-sm sm:text-base max-w-sm px-2">
                {brandDescription}
              </p>
              {socialLinks.length > 0 && (
                <div className="flex mt-1 gap-5">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-neutral-500 hover:text-[#C3E41D] transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — nav links stacked vertically */}
            {navLinks.length > 0 && (
              <nav className="shrink-0 flex flex-col items-end gap-2 text-sm font-medium text-neutral-500 self-start">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-[#C3E41D] transition-colors duration-300 hover:font-semibold whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* ── Large brand text ──────────────────────────────────────────── */}
          <div className="relative mt-8 mb-0 overflow-hidden">
            {/* The big text itself */}
            <div
              className="relative font-extrabold tracking-tighter select-none text-center leading-none whitespace-nowrap w-full"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 9rem)",
                background:
                  "linear-gradient(to bottom, rgba(195,228,29,0.18), rgba(195,228,29,0.04))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {brandName.toUpperCase()}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5 pt-4">
            <p className="text-xs text-neutral-600 text-center sm:text-left">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">
              Built with{" "}
              <span className="text-[#C3E41D]">React</span>{" "}
              &{" "}
              <span className="text-[#C3E41D]">Tailwind CSS</span>
            </p>
          </div>
        </div>

        {/* Bottom shadow fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#050505] to-transparent" />
      </footer>
    </section>
  );
};
