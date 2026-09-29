"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEnquiry } from "@/context/EnquiryContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E6DFD5]/70 py-3.5"
          : "bg-[#FAF7F2] py-5 border-b border-[#E6DFD5]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#14281D]/10 bg-white p-0.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="AYUKAL Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-[#14281D] font-medium leading-none">
              AYUKAL
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#B87D4B] font-semibold mt-0.5">
              AYURVEDIC WELLNESS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#14281D] font-semibold"
                    : "text-[#5A645D] hover:text-[#14281D]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#14281D] rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => openEnquiryModal()}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:bg-[#1E3B2B] hover:shadow-md active:scale-95 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#14281D] hover:bg-[#F3ECE2] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#FAF7F2] border-b border-[#E6DFD5] shadow-xl z-50 animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-4">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-serif py-2 border-b border-[#E6DFD5]/40 flex items-center justify-between ${
                      isActive
                        ? "text-[#14281D] font-semibold pl-2 border-l-2 border-l-[#14281D]"
                        : "text-[#5A645D]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B87D4B] opacity-70" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full py-3.5 bg-[#14281D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xl text-center shadow-md active:scale-98 transition-all flex items-center justify-center space-x-2"
              >
                <span>Enquire About Products</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
