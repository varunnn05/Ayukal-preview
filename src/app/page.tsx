import React from "react";
import HeroSection from "@/components/HeroSection";
import BrandIntroSection from "@/components/BrandIntroSection";
import WhyAyukalSection from "@/components/WhyAyukalSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import VisionSection from "@/components/VisionSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <WhyAyukalSection />
      <ProductPreviewSection />
      <VisionSection />
      <FinalCTASection />
    </>
  );
}
