"use client";

import React from "react";
import { useEnquiry } from "@/context/EnquiryContext";
import { MessageCircle } from "lucide-react";

interface Props {
  label?: string;
  productName?: string;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
}

export default function ContactCTAButton({
  label = "Enquire Now",
  productName,
  variant = "primary",
  className = "",
}: Props) {
  const { openEnquiryModal } = useEnquiry();

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return "border border-[#14281D] text-[#14281D] hover:bg-[#14281D]/5";
      case "outline-light":
        return "border border-[#FAF7F2]/40 text-[#FAF7F2] hover:bg-white/10";
      default:
        return "bg-[#14281D] text-[#FAF7F2] hover:bg-[#1E3B2B]";
    }
  };

  return (
    <button
      onClick={() => openEnquiryModal(productName)}
      className={`inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-xs active:scale-98 ${getVariantStyles()} ${className}`}
    >
      <MessageCircle className="w-3.5 h-3.5 mr-2" />
      <span>{label}</span>
    </button>
  );
}
