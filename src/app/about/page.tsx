import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ShieldCheck, HeartHandshake, Leaf, ArrowRight, SunMedium } from "lucide-react";
import ContactCTAButton from "@/components/ContactCTAButton";

export const metadata: Metadata = {
  title: "About Us | Our Story & Philosophy",
  description:
    "Learn about AYUKAL, our Ayurvedic heritage, whole botanical sourcing, and commitment to modern daily wellness.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Editorial Page Header */}
      <section className="py-20 md:py-28 bg-[#F3ECE2] border-b border-[#E6DFD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14281D]/5 border border-[#14281D]/10 text-[#14281D] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#B87D4B]" />
              <span>Our Brand Story</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14281D] font-light leading-tight">
              Rooted in Wisdom. <br />
              <span className="italic font-normal text-[#B87D4B]">
                Crafted for Modern Vitality.
              </span>
            </h1>

            <p className="text-[#5A645D] text-base sm:text-lg leading-relaxed font-light pt-2">
              AYUKAL was founded to restore harmony between classical Indian botanical
              mastery and contemporary active lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction & Brand Philosophy */}
      <section className="py-20 border-b border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
                01 / Brand Introduction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14281D] font-light">
                Honoring Ayurveda's Timeless Legacy
              </h2>
              <p className="text-[#5A645D] leading-relaxed font-light">
                Ayurveda is not simply an ancient science—it is a living philosophy of
                rhythm, balance, and elemental nourishers. At AYUKAL, we honor the core principles
                of Rasayana (rejuvenative botanicals) to help daily urban life stay grounded and vibrant.
              </p>
              <p className="text-[#5A645D] leading-relaxed font-light">
                Rather than treating wellness as a complex chore, we curate clean, uncomplicated
                adaptogenic formulations designed for seamless integration into morning teas, smoothies,
                and bedtime rituals.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-lg">
                <Image
                  src="/images/ashwagandha.png"
                  alt="Ayurvedic Botanical Heritage"
                  fill
                  className="object-cover img-hover-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Philosophy & Ayurveda Meets Modern Living */}
      <section className="py-20 bg-[#F3ECE2] border-b border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
              02 / Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14281D] font-light">
              Ayurveda Meets Modern Living
            </h2>
            <p className="text-[#5A645D] font-light text-base">
              The modern world demands energy, focus, and emotional calm. We bridge the past and present through three foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#14281D]/5 flex items-center justify-center text-[#14281D]">
                <Leaf className="w-5 h-5 text-[#14281D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14281D]">Whole Plant Integrity</h3>
              <p className="text-xs text-[#5A645D] leading-relaxed font-light">
                We respect the natural intelligence of whole plant powders and whole extracts, maintaining full-spectrum phytochemical synergy.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#14281D]/5 flex items-center justify-center text-[#14281D]">
                <SunMedium className="w-5 h-5 text-[#B87D4B]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14281D]">Rhythmic Well-Being</h3>
              <p className="text-xs text-[#5A645D] leading-relaxed font-light">
                Aligning daily herbal intake with sunrise and sunset to support natural circadian energy and deep evening restoration.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#14281D]/5 flex items-center justify-center text-[#14281D]">
                <HeartHandshake className="w-5 h-5 text-[#14281D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14281D]">Purity Without Compromise</h3>
              <p className="text-xs text-[#5A645D] leading-relaxed font-light">
                Free from artificial colors, chemical preservatives, or synthetic binder additives. Pure organic herb power only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quality Philosophy & Sustainability */}
      <section className="py-20 border-b border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-lg">
                <Image
                  src="/images/moringa.png"
                  alt="AYUKAL Quality & Sustainable Sourcing"
                  fill
                  className="object-cover img-hover-zoom"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
                03 / Quality & Sustainability
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14281D] font-light">
                Ethical Sourcing & Earth Stewardship
              </h2>
              <p className="text-[#5A645D] leading-relaxed font-light">
                Our raw ingredients—such as organic Moringa foliage and high-potency Ashwagandha roots—are sourced directly from agricultural regions across Gujarat and Western India.
              </p>
              <p className="text-[#5A645D] leading-relaxed font-light">
                We believe true wellness includes environmental responsibility. We actively prioritize recyclable packaging and sustainable cultivation partnerships to minimize our ecological footprint.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs text-[#14281D] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B87D4B]" />
                <span>Rigorous Cleanliness Standards • Sustainable Farm Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision & Editorial Call to Action */}
      <section className="py-24 bg-[#14281D] text-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">
            04 / Looking Ahead
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF7F2] font-light leading-tight">
            Our Vision for Indian Wellness
          </h2>
          <p className="text-[#8A9A86] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            AYUKAL aims to become a trusted global ambassador of elevated Indian wellness, demonstrating that ancient wisdom remains the most potent ally for modern human vitality.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#D4A373] text-[#14281D] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#c29263] transition-all shadow-md group"
            >
              <span>Explore Our Formulations</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <ContactCTAButton label="Contact AYUKAL Team" variant="outline-light" />
          </div>
        </div>
      </section>
    </div>
  );
}
