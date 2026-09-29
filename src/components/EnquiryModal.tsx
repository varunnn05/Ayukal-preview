"use client";

import React, { useState, useEffect } from "react";
import { useEnquiry } from "@/context/EnquiryContext";
import { PRODUCTS } from "@/data/products";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function EnquiryModal() {
  const { isOpen, selectedProduct, closeEnquiryModal } = useEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: selectedProduct || "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({ ...prev, product: selectedProduct }));
    }
  }, [selectedProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief smooth response delay for preview realism
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "", product: "", message: "" });
    closeEnquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E6DFD5] overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#14281D] text-[#FAF7F2] p-6 sm:p-8 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#E6DFD5] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#D4A373] text-xs uppercase tracking-widest font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Enquiry Demo</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-tight">
            Connect with AYUKAL
          </h3>
          <p className="text-[#8A9A86] text-xs sm:text-sm mt-1 font-light">
            {selectedProduct
              ? `Inquiring about ${selectedProduct}`
              : "Share your requirements or wholesale distribution interest."}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#14281D]/10 text-[#14281D] mb-2">
                <CheckCircle2 className="w-10 h-10 text-[#14281D]" />
              </div>
              <h4 className="font-serif text-2xl text-[#14281D]">
                Thank You for Your Interest
              </h4>
              <p className="text-[#5A645D] text-sm leading-relaxed max-w-sm mx-auto">
                Your enquiry has been successfully recorded in this interactive
                frontend demo preview.
              </p>

              <div className="p-4 bg-[#F3ECE2] border border-[#E6DFD5] rounded-xl text-xs text-[#1C201D] text-left mt-6 space-y-1">
                <p className="font-semibold text-[#14281D] flex items-center justify-between">
                  <span>Demo Submission Summary</span>
                  <span className="text-[10px] bg-[#14281D] text-[#FAF7F2] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Sales Preview
                  </span>
                </p>
                <p>
                  <strong className="font-medium">Name:</strong> {formData.name || "N/A"}
                </p>
                <p>
                  <strong className="font-medium">Email:</strong> {formData.email || "N/A"}
                </p>
                <p>
                  <strong className="font-medium">Product:</strong>{" "}
                  {formData.product || "General Enquiry"}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 bg-[#14281D] text-[#FAF7F2] text-sm font-medium rounded-xl hover:bg-[#1E3B2B] transition-colors focus:outline-none shadow-sm"
                >
                  Close Preview Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
                  Full Name <span className="text-[#C2845A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
                    Phone Number <span className="text-[#C2845A]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-white border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
                    Email Address <span className="text-[#C2845A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-white border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
                  Interested Product
                </label>
                <select
                  value={formData.product}
                  onChange={(e) =>
                    setFormData({ ...formData, product: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
                >
                  <option value="">Select a product (General Enquiry)</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.subtitle})
                    </option>
                  ))}
                  <option value="Wholesale & Bulk Distribution">
                    Wholesale & Bulk Distribution
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific questions regarding dosage, availability, or distribution..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#14281D] text-[#FAF7F2] text-sm font-semibold rounded-xl hover:bg-[#1E3B2B] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5A645D] pt-1 italic">
                Demo Preview Mode — No real database or email server will be contacted.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
