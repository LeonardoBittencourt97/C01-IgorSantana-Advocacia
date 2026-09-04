import type { Metadata } from "next";
import LinksClient from "./LinksClient";

export const metadata: Metadata = {
  title: "Links",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinksPage() {
  return <LinksClient />;
}
