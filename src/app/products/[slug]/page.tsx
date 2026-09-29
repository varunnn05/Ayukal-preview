import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import { BRAND_INFO } from "@/data/brand";
import ProductDetailClient from "@/components/ProductDetailClient";
import { ArrowLeft, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} (${product.subtitle}) | AYUKAL`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link Breadcrumb */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#5A645D] hover:text-[#14281D] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Formulations</span>
          </Link>
        </div>

        {/* Client Product Detail Component */}
        <ProductDetailClient product={product} brand={BRAND_INFO} />
      </div>
    </div>
  );
}
