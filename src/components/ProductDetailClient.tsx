"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { buildWhatsAppUrl } from "@/data/brand";
import { useEnquiry } from "@/context/EnquiryContext";
import {
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
  Leaf,
  Info,
} from "lucide-react";

interface Props {
  product: Product;
  brand: any;
}

export default function ProductDetailClient({ product, brand }: Props) {
  const { openEnquiryModal } = useEnquiry();

  return (
    <div className="space-y-12">
      {/* Top Main Section */}
      <div className="bg-white rounded-3xl border border-[#E6DFD5] p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Gallery / Image View */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD5]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover img-hover-zoom"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#14281D]/80 backdrop-blur-xs text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold px-3.5 py-1 rounded-full">
                100% Organic Botanical
              </div>
            </div>

            {/* Quality promise */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl flex items-center justify-between text-xs text-[#5A645D]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#B87D4B]" />
                <span>Lab Cleanliness Certified Batch</span>
              </div>
              <span className="text-[#14281D] font-medium">India Origin</span>
            </div>
          </div>

          {/* Right Column: Details & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 border-b border-[#E6DFD5] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
                {product.subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14281D] font-light">
                {product.name}
              </h1>
              <p className="text-[#B87D4B] text-sm font-medium pt-1">
                {product.tagline}
              </p>
              <p className="text-[#5A645D] text-sm sm:text-base leading-relaxed font-light pt-2">
                {product.shortDescription}
              </p>
            </div>

            {/* Available Forms */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#14281D]">
                Available Product Forms:
              </span>
              <div className="p-3 bg-[#F3ECE2] border border-[#E6DFD5] rounded-xl text-xs text-[#14281D] font-medium flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-[#B87D4B]" />
                <span>{product.forms}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Enquire Button */}
              <button
                onClick={() => openEnquiryModal(product.name)}
                className="w-full py-4 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-[#1E3B2B] active:scale-98 transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-[#D4A373]" />
                <span>Enquire About This Product</span>
              </button>

              {/* Secondary Buttons: WhatsApp & Call */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={buildWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-all text-xs font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${brand.contact.phoneRaw}`}
                  className="py-3.5 px-4 bg-[#FAF7F2] text-[#14281D] border border-[#E6DFD5] rounded-xl hover:bg-[#F3ECE2] transition-all text-xs font-semibold flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#B87D4B]" />
                  <span>Call AYUKAL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Tabs & Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 8 Cols: Benefits & Description */}
        <div className="lg:col-span-8 space-y-8">
          {/* Full Description */}
          <div className="bg-white rounded-2xl border border-[#E6DFD5] p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#14281D] border-b border-[#E6DFD5] pb-3">
              Formulation Overview
            </h3>
            <p className="text-[#5A645D] text-sm sm:text-base leading-relaxed font-light">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl border border-[#E6DFD5] p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#14281D] border-b border-[#E6DFD5] pb-3">
              Key Wellness Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E6DFD5] flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B87D4B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#14281D]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#8A9A86] italic pt-2">
              * Note: Statements regarding dietary supplements are intended for daily wellness support and have not been evaluated for medical treatment.
            </p>
          </div>
        </div>

        {/* Right 4 Cols: Ingredients & Suggested Usage */}
        <div className="lg:col-span-4 space-y-8">
          {/* Ingredients */}
          <div className="bg-white rounded-2xl border border-[#E6DFD5] p-6 space-y-4">
            <h4 className="font-serif text-xl text-[#14281D] border-b border-[#E6DFD5] pb-2 flex items-center justify-between">
              <span>Ingredients</span>
              <Sparkles className="w-4 h-4 text-[#B87D4B]" />
            </h4>
            <ul className="space-y-2 text-xs text-[#5A645D]">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14281D] mt-1.5 shrink-0" />
                  <span className="leading-relaxed font-medium">{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage / Dosage */}
          <div className="bg-white rounded-2xl border border-[#E6DFD5] p-6 space-y-4">
            <h4 className="font-serif text-xl text-[#14281D] border-b border-[#E6DFD5] pb-2 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#B87D4B]" />
              <span>Suggested Usage</span>
            </h4>
            <p className="text-xs text-[#5A645D] leading-relaxed font-light">
              {product.usage}
            </p>
          </div>

          {/* Client Disclaimer Box */}
          <div className="p-4 bg-[#F3ECE2] rounded-xl border border-[#E6DFD5] text-[11px] text-[#14281D] space-y-1">
            <div className="flex items-center space-x-1 font-semibold">
              <Info className="w-3.5 h-3.5 text-[#B87D4B]" />
              <span>Preview Demo Note</span>
            </div>
            <p className="text-[#5A645D]">
              This product detail view demonstrates how customers will view ingredients, forms, and enquiry buttons on the final website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
