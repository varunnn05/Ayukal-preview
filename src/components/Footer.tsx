"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND_INFO, buildWhatsAppUrl } from "@/data/brand";
import { PRODUCTS } from "@/data/products";
import { useEnquiry } from "@/context/EnquiryContext";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <footer className="bg-[#14281D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#1E3B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#1E3B2B]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 rounded-full bg-white p-0.5 overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="AYUKAL Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl tracking-widest text-[#FAF7F2] font-normal">
                  AYUKAL
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4A373] font-semibold">
                  AYURVEDIC WELLNESS
                </span>
              </div>
            </div>

            <p className="text-[#8A9A86] text-sm leading-relaxed max-w-sm font-light">
              Harmonising time-honoured Ayurvedic botanical principles with modern
              scientific precision for daily stamina, mental clarity, and enduring vitality.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#D4A373]">
              <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
              <span>100% Organic Botanicals • Pure & Original Formulations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-medium tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8A9A86]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  About AYUKAL
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-medium tracking-wide">
              Formulations
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8A9A86]">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="hover:text-[#FAF7F2] transition-colors flex items-center group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[11px] text-[#D4A373] ml-1.5 opacity-80 group-hover:translate-x-1 transition-transform">
                      ({prod.subtitle})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-medium tracking-wide">
              Reach AYUKAL
            </h4>
            <ul className="space-y-3 text-xs text-[#8A9A86]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BRAND_INFO.contact.address}
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                  className="hover:text-[#FAF7F2] transition-colors text-sm font-medium"
                >
                  {BRAND_INFO.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="hover:text-[#FAF7F2] transition-colors text-xs truncate max-w-[200px]"
                  title={BRAND_INFO.contact.email}
                >
                  {BRAND_INFO.contact.email}
                </a>
              </li>

              <li className="pt-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366]/15 text-[#25D366] rounded-lg border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-all text-xs font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9A86] space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} AYUKAL Wellness. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => openEnquiryModal()}
              className="text-[#D4A373] hover:underline focus:outline-none"
            >
              Client Enquiry Preview
            </button>
            <span className="text-[#1E3B2B]">•</span>
            <span>Surat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
