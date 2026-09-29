"use client";

import React from "react";
import { EnquiryProvider } from "@/context/EnquiryContext";
import EnquiryModal from "@/components/EnquiryModal";

export default function GlobalModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EnquiryProvider>
      {children}
      <EnquiryModal />
    </EnquiryProvider>
  );
}
