import type { Metadata } from "next";
import ContatoForm from "./ContatoForm";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return <ContatoForm />;
}
