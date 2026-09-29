import React from "react";
import { Metadata } from "next";
import { BRAND_INFO, buildWhatsAppUrl } from "@/data/brand";
import ContactFormClient from "@/components/ContactFormClient";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AYUKAL Ayurvedic Wellness",
  description:
    "Get in touch with AYUKAL for product enquiries, retail distribution, or general wellness guidance.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4 border-b border-[#E6DFD5] pb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14281D]/5 border border-[#14281D]/10 text-[#14281D] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#B87D4B]" />
            <span>Get in Touch</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14281D] font-light">
            Contact AYUKAL
          </h1>

          <p className="text-[#5A645D] text-base sm:text-lg font-light leading-relaxed">
            We welcome inquiries from customers, retail partners, and distribution representatives across India.
          </p>
        </div>

        {/* Main Grid: Contact Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-[#E6DFD5] p-8 space-y-8 shadow-xs">
              <h2 className="font-serif text-2xl text-[#14281D] border-b border-[#E6DFD5] pb-4">
                Headquarters & Communication
              </h2>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F3ECE2] rounded-xl text-[#14281D]">
                    <MapPin className="w-5 h-5 text-[#B87D4B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#14281D]">Physical Office</h3>
                    <p className="text-[#5A645D] text-xs sm:text-sm leading-relaxed font-light mt-1">
                      {BRAND_INFO.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F3ECE2] rounded-xl text-[#14281D]">
                    <Phone className="w-5 h-5 text-[#B87D4B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#14281D]">Phone & Inquiries</h3>
                    <a
                      href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                      className="text-[#14281D] font-semibold text-sm hover:text-[#B87D4B] transition-colors block mt-1"
                    >
                      {BRAND_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F3ECE2] rounded-xl text-[#14281D]">
                    <Mail className="w-5 h-5 text-[#B87D4B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#14281D]">Official Email</h3>
                    <a
                      href={`mailto:${BRAND_INFO.contact.email}`}
                      className="text-[#14281D] font-medium text-xs sm:text-sm hover:text-[#B87D4B] transition-colors block mt-1 break-all"
                    >
                      {BRAND_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div className="p-6 bg-[#14281D] text-[#FAF7F2] rounded-2xl space-y-4">
                <div className="flex items-center space-x-2 text-xs text-[#D4A373] uppercase tracking-wider font-semibold">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Instant Messaging</span>
                </div>
                <h4 className="font-serif text-xl font-light">
                  Prefer direct messaging?
                </h4>
                <p className="text-xs text-[#8A9A86] leading-relaxed">
                  Connect directly with our team on WhatsApp for immediate response regarding stock & formulations.
                </p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] text-[#14281D] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E6DFD5] p-8 sm:p-10 shadow-xs">
              <div className="mb-8 space-y-2">
                <h2 className="font-serif text-3xl text-[#14281D]">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-[#5A645D] font-light">
                  Fill in your details below and our preview demo handler will record your input.
                </p>
              </div>

              <ContactFormClient />
            </div>
          </div>
        </div>

        {/* Location Map Section Placeholder */}
        <div className="bg-white rounded-3xl border border-[#E6DFD5] p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6DFD5] pb-4 space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-serif text-2xl text-[#14281D] flex items-center space-x-2">
                <Building className="w-5 h-5 text-[#B87D4B]" />
                <span>Our Surat Facility Location</span>
              </h3>
              <p className="text-xs text-[#5A645D]">
                Vadad Gam, Bamroli, Surat, Gujarat – 394540
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                BRAND_INFO.contact.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-[#14281D] hover:text-[#B87D4B] transition-colors"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Location Map Frame */}
          <div className="relative aspect-[21/9] min-h-[260px] rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD5] flex items-center justify-center p-6 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(#14281D_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

            <div className="relative z-10 max-w-md space-y-3 p-6 bg-[#FAF7F2]/90 backdrop-blur-md rounded-2xl border border-[#E6DFD5] shadow-lg">
              <div className="w-10 h-10 rounded-full bg-[#14281D] text-[#FAF7F2] mx-auto flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#D4A373]" />
              </div>
              <h4 className="font-serif text-xl text-[#14281D]">
                AYUKAL Headquarters & Operations
              </h4>
              <p className="text-xs text-[#5A645D]">
                Small Akash 1, Behind CNG Pump, Vadad Gam, Bamroli, Surat – 394540, Gujarat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
