import type { Metadata } from "next";
import AreasDeAtuacaoClient from "./AreasDeAtuacaoClient";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação do escritório Igor Santana Advocacia. Especialização em Direito do Trabalho: acidente de trabalho, vínculo empregatício, estabilidade e mais.",
};

export default function AreasDeAtuacaoPage() {
  return <AreasDeAtuacaoClient />;
}
