"use client";

import React from "react";
import Link from "next/link";
import { useEnquiry } from "@/context/EnquiryContext";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

export default function FinalCTASection() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-24 bg-[#F3ECE2] border-b border-[#E6DFD5] text-center relative overflow-hidden">
      {/* Decorative backdrop graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(#14281D_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#14281D]/5 border border-[#14281D]/10 text-[#14281D] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#B87D4B]" />
          <span>Begin Your Journey</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14281D] font-light leading-tight">
          Discover Your Everyday Vitality
        </h2>

        <p className="text-[#5A645D] text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
          Experience the pure, transformative energy of organic Ayurvedic adaptogens.
          Connect with AYUKAL today to discuss product availability and retail inquiry options.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 pt-4">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#1E3B2B] transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => openEnquiryModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#14281D] text-[#14281D] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#14281D]/5 transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-2 text-[#B87D4B]" />
            <span>Contact AYUKAL</span>
          </button>
        </div>
      </div>
    </section>
  );
}
