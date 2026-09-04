"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinksPage = pathname === "/links";

  return (
    <>
      {!isLinksPage && <Header />}
      <main id="main-content">{children}</main>
      {!isLinksPage && <Footer />}
      {!isLinksPage && <WhatsAppButton />}
    </>
  );
}
