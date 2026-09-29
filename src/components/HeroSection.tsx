"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEnquiry } from "@/context/EnquiryContext";
import { BRAND_INFO } from "@/data/brand";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E6DFD5]">
      {/* Editorial Decorative Backdrop Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#F3ECE2] opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14281D]/5 border border-[#14281D]/10 text-[#14281D] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#B87D4B]" />
              <span>Ayurvedic Wellness Reimagined</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14281D] font-light tracking-tight leading-[1.15]">
              Where Ancient Wisdom <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B87D4B]">
                Supports Modern Living.
              </span>
            </h1>

            <p className="text-[#5A645D] text-base sm:text-lg leading-relaxed max-w-xl font-light">
              AYUKAL brings time-honoured Ayurvedic wisdom into modern daily routines.
              Formulated with organic botanicals to support core stamina, stress resilience,
              and balanced everyday vitality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-4 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#1E3B2B] transition-all shadow-md hover:shadow-lg group active:scale-98"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent border border-[#14281D]/30 text-[#14281D] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#14281D]/5 transition-all active:scale-98 cursor-pointer"
              >
                <span>Talk to AYUKAL</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E6DFD5] flex items-center space-x-6 text-xs text-[#5A645D]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#B87D4B]" />
                <span>100% Organic Extracts</span>
              </div>
              <span className="text-[#E6DFD5]">•</span>
              <div>No Synthetic Fillers</div>
              <span className="text-[#E6DFD5]">•</span>
              <div>Surat, India</div>
            </div>
          </div>

          {/* Right Column: Editorial Product Showcase Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Product Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD5] p-3 shadow-xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/ashwagandha.png"
                    alt="AYUKAL Ashwagandha Hero Presentation"
                    fill
                    className="object-cover img-hover-zoom"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/60 via-transparent to-transparent opacity-80" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D4A373] bg-[#14281D]/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      Signature Botanical
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#FAF7F2]">
                      Organic Ashwagandha
                    </h3>
                    <p className="text-xs text-[#FAF7F2]/80 font-light line-clamp-1">
                      Powder & Pure Tablets for Inner Strength
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl p-4 shadow-lg max-w-[220px]">
                <p className="text-[10px] uppercase tracking-widest text-[#B87D4B] font-semibold">
                  Pure Philosophy
                </p>
                <p className="text-xs text-[#14281D] font-serif font-normal mt-1 leading-snug">
                  "Sourced directly from authentic Indian botanical origins."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
