import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ContactCTAButton from "@/components/ContactCTAButton";

export const metadata: Metadata = {
  title: "Products Catalogue | Premium Ayurvedic Wellness Formulations",
  description:
    "Explore AYUKAL's line of organic Ayurvedic supplements including Ashwagandha, Moringa, and Vitality Booster.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Catalogue Header */}
        <div className="max-w-3xl space-y-4 border-b border-[#E6DFD5] pb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14281D]/5 border border-[#14281D]/10 text-[#14281D] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#B87D4B]" />
            <span>Product Catalogue</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14281D] font-light">
            Ayurvedic Formulations
          </h1>

          <p className="text-[#5A645D] text-base sm:text-lg font-light leading-relaxed">
            Crafted with organic Indian botanicals to support daily physical resilience,
            immune strength, and sustained vitality.
          </p>
        </div>

        {/* Products List / Grid Presentation */}
        <div className="space-y-16">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#E6DFD5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 p-6 sm:p-10 lg:p-12"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD5] ${
                      !isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover img-hover-zoom"
                    />
                    <div className="absolute top-4 left-4 bg-[#14281D]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                      {product.forms}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      !isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D4B]">
                        {product.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#14281D] font-light">
                        {product.name}
                      </h2>
                      <p className="text-[#5A645D] text-sm leading-relaxed font-light pt-1">
                        {product.fullDescription}
                      </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="space-y-2 pt-2 border-t border-[#E6DFD5]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#14281D]">
                        Key Wellness Benefits:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A645D]">
                        {product.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 bg-[#FAF7F2] p-2 rounded-lg border border-[#E6DFD5]/60"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B87D4B] shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#1E3B2B] transition-all shadow-md group"
                      >
                        <span>View Product Details</span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>

                      <ContactCTAButton
                        label="Enquire About Product"
                        productName={product.name}
                        variant="outline"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
