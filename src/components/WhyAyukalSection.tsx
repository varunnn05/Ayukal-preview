"use client";

import React from "react";
import { Sparkles, ShieldCheck, Microchip, Globe2 } from "lucide-react";

export default function WhyAyukalSection() {
  const pillars = [
    {
      number: "01",
      title: "Pure & Organic",
      subtitle: "Uncompromised Botanical Integrity",
      description:
        "Every batch is crafted from 100% organic herb sources, meticulously cleaned, tested, and processed without synthetic fillers, artificial binders, or harmful chemicals.",
      icon: ShieldCheck,
      accent: "bg-[#14281D]/5 text-[#14281D]",
    },
    {
      number: "02",
      title: "Science-Based Ayurveda",
      subtitle: "Traditional Wisdom Validated",
      description:
        "We harmonize classical Ayurvedic Rasayana literature with contemporary standardized extraction methods to ensure optimal bio-availability and consistent potency.",
      icon: Microchip,
      accent: "bg-[#B87D4B]/10 text-[#B87D4B]",
    },
    {
      number: "03",
      title: "Sustainable & Original",
      subtitle: "Ethical Indian Sourcing",
      description:
        "From small-holder farming partnerships in Gujarat and across India to sustainable recyclable packaging, AYUKAL honors the earth at every step of production.",
      icon: Globe2,
      accent: "bg-[#8A9A86]/15 text-[#14281D]",
    },
  ];

  return (
    <section className="py-20 bg-[#F3ECE2] border-b border-[#E6DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The AYUKAL Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14281D] font-light leading-tight">
            Why AYUKAL Stands Apart
          </h2>
          <p className="text-[#5A645D] text-base font-light">
            A commitment to authenticity, purity, and modern editorial excellence.
          </p>
        </div>

        {/* Editorial Layout: Asymmetric List/Grid with Highlighted Border Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#FAF7F2] rounded-2xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-4">
                    <span className="font-serif text-3xl font-light text-[#B87D4B]">
                      {pillar.number}
                    </span>
                    <div className={`p-3 rounded-xl ${pillar.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#14281D] font-medium group-hover:text-[#B87D4B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#B87D4B] font-semibold">
                      {pillar.subtitle}
                    </p>
                    <p className="text-[#5A645D] text-sm leading-relaxed font-light pt-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6DFD5]/50 text-[11px] text-[#8A9A86] uppercase tracking-wider font-medium">
                  AYUKAL Quality Guarantee
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
