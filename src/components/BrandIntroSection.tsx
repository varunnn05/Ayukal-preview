"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Compass, Sun } from "lucide-react";

export default function BrandIntroSection() {
  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Typography & Editorial Quote */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
              Brand Philosophy
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14281D] font-light leading-tight">
              True vitality begins <br />
              <span className="italic font-normal text-[#B87D4B]">
                at the source.
              </span>
            </h2>

            <p className="text-[#5A645D] text-base leading-relaxed font-light">
              In a world of synthetic supplements and complex routines, AYUKAL returns to
              fundamental botanical wisdom. We believe daily wellness should be simple,
              honest, and rooted in the intelligence of nature.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E6DFD5]">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#14281D]/5 flex items-center justify-center text-[#14281D]">
                  <Leaf className="w-4 h-4 text-[#14281D]" />
                </div>
                <h4 className="font-serif text-lg text-[#14281D]">
                  Whole Botanical Integrity
                </h4>
                <p className="text-xs text-[#5A645D] leading-relaxed">
                  Preserving raw herb power without artificial isolation or chemicals.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#14281D]/5 flex items-center justify-center text-[#14281D]">
                  <Compass className="w-4 h-4 text-[#14281D]" />
                </div>
                <h4 className="font-serif text-lg text-[#14281D]">
                  Modern Rhythmic Living
                </h4>
                <p className="text-xs text-[#5A645D] leading-relaxed">
                  Designed for effortless integration into active daily schedules.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#14281D] hover:text-[#B87D4B] transition-colors border-b border-[#14281D] pb-1"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Editorial Image Grid Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#E6DFD5]">
                <Image
                  src="/images/moringa.png"
                  alt="Moringa Leaves & Botanical Powder"
                  fill
                  className="object-cover img-hover-zoom"
                />
              </div>

              <div className="col-span-5 space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md border border-[#E6DFD5]">
                  <Image
                    src="/images/vitality-booster.png"
                    alt="Vitality Booster Ingredients"
                    fill
                    className="object-cover img-hover-zoom"
                  />
                </div>

                <div className="p-5 bg-[#F3ECE2] rounded-xl border border-[#E6DFD5]">
                  <Sun className="w-5 h-5 text-[#B87D4B] mb-2" />
                  <p className="font-serif text-sm text-[#14281D] leading-snug">
                    "Every plant carries the sun, soil, and spirit of Indian Ayurveda."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
