"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="py-10 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#14281D]/10 text-[#14281D]">
          <CheckCircle2 className="w-10 h-10 text-[#14281D]" />
        </div>
        <h3 className="font-serif text-3xl text-[#14281D]">
          Message Received
        </h3>
        <p className="text-[#5A645D] text-sm leading-relaxed max-w-md mx-auto">
          Thank you for reaching out to AYUKAL. Your message has been recorded in this client preview site.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
          }}
          className="mt-4 px-6 py-3 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#1E3B2B] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
            Your Name <span className="text-[#C2845A]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Mehta"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
            Phone Number <span className="text-[#C2845A]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
            Email Address <span className="text-[#C2845A]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
            Subject / Inquiry Type
          </label>
          <input
            type="text"
            placeholder="e.g. Retail Stock Inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#14281D] mb-1.5">
          Message Details
        </label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your interest or questions regarding AYUKAL..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E6DFD5] rounded-xl text-sm text-[#1C201D] focus:outline-none focus:border-[#14281D] focus:ring-1 focus:ring-[#14281D] transition-all resize-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-[#1E3B2B] transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
