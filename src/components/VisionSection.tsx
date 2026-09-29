"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-24 bg-[#14281D] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Background Graphic Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1E3B2B] opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#1E3B2B] shadow-2xl">
              <Image
                src="/images/vitality-booster.png"
                alt="AYUKAL Lifestyle & Botanical Heritage"
                fill
                className="object-cover img-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14281D] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Pull Quote Box */}
            <div className="mt-6 p-6 bg-[#1E3B2B]/90 border border-[#8A9A86]/30 rounded-xl backdrop-blur-xs">
              <p className="font-serif text-lg text-[#D4A373] italic leading-snug">
                "We cultivate wellness as a conscious daily ritual — bridging ancient botanical mastery with contemporary living."
              </p>
              <p className="text-xs uppercase tracking-widest text-[#8A9A86] mt-2 font-medium">
                — AYUKAL Manifesto
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4A373] font-semibold bg-[#1E3B2B] px-3.5 py-1.5 rounded-full border border-[#D4A373]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Lifestyle Movement</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] font-light leading-tight">
              AYUKAL is more than just a supplement brand;{" "}
              <span className="italic font-normal text-[#D4A373]">
                it is a lifestyle movement.
              </span>
            </h2>

            <p className="text-[#8A9A86] text-base leading-relaxed font-light">
              True wellbeing isn't found in temporary quick fixes. It is built quietly
              through daily harmony — feeding the body clean organic nutrients, supporting
              the nervous system with time-tested adaptogens, and awakening natural energy
              from within.
            </p>

            <div className="space-y-4 pt-2 border-t border-[#1E3B2B]">
              <div className="flex items-start space-x-4">
                <span className="text-[#D4A373] font-serif text-xl">01</span>
                <div>
                  <h4 className="font-serif text-lg text-[#FAF7F2]">
                    Mindful Daily Rituals
                  </h4>
                  <p className="text-xs text-[#8A9A86] font-light leading-relaxed mt-0.5">
                    Integrating elemental herbs into morning tea, water, or evening milk.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-[#D4A373] font-serif text-xl">02</span>
                <div>
                  <h4 className="font-serif text-lg text-[#FAF7F2]">
                    Conscious Indian Heritage
                  </h4>
                  <p className="text-xs text-[#8A9A86] font-light leading-relaxed mt-0.5">
                    Honoring centuries of Ayurvedic scholarship while adhering to world-class safety.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D4A373] text-[#14281D] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#c29263] transition-all shadow-md group"
              >
                <span>Explore Brand Vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
