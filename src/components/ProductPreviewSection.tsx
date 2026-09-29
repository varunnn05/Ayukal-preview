"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useEnquiry } from "@/context/EnquiryContext";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

export default function ProductPreviewSection() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-24 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B87D4B] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Formulations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14281D] font-light">
              Essential Daily Wellness
            </h2>
            <p className="text-[#5A645D] text-base font-light">
              Discover our initial lineup of pure, plant-powered Ayurvedic supplements.
            </p>
          </div>

          <div>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#14281D] border-b-2 border-[#14281D] pb-1 hover:text-[#B87D4B] hover:border-[#B87D4B] transition-all"
            >
              <span>View All 3 Formulations</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-[4/5] bg-[#F3ECE2] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover img-hover-zoom"
                  />
                  <div className="absolute top-4 left-4 bg-[#14281D]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                    {product.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-[#14281D] font-medium group-hover:text-[#B87D4B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#B87D4B] uppercase tracking-wider font-semibold">
                      {product.forms}
                    </p>
                  </div>

                  <p className="text-[#5A645D] text-sm leading-relaxed font-light line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* Key Benefits List */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#E6DFD5]/60 text-xs text-[#14281D]">
                    {product.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B87D4B]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 sm:p-8 pt-0 flex items-center space-x-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 py-3 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xl text-center hover:bg-[#1E3B2B] transition-all flex items-center justify-center space-x-1 group-hover:shadow-md"
                >
                  <span>View Product</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-80" />
                </Link>

                <button
                  onClick={() => openEnquiryModal(product.name)}
                  className="p-3 bg-[#FAF7F2] border border-[#E6DFD5] text-[#14281D] hover:bg-[#F3ECE2] rounded-xl transition-colors cursor-pointer"
                  title={`Enquire about ${product.name}`}
                >
                  <MessageCircle className="w-4 h-4 text-[#14281D]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
