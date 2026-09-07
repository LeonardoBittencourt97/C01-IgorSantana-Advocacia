"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

function initLenis() {
  if (typeof window === "undefined") return;

  const html = document.documentElement;

  const checkLenis = () => {
    // Lenis is loaded via CDN or we use native smooth scroll
    // For now, use CSS scroll-behavior: smooth as fallback
    html.classList.add("lenis", "lenis-smooth");
  };

  checkLenis();
}

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinksPage = pathname === "/links";

  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
      {!isLinksPage && <Header />}
      <main id="main-content">{children}</main>
      {!isLinksPage && <Footer />}
      {!isLinksPage && <WhatsAppButton />}
    </>
  );
}
