import Hero from "@/components/sections/Hero";
import Numeros from "@/components/sections/Numeros";
import Sobre from "@/components/sections/Sobre";
import AreasAtuacao from "@/components/sections/AreasAtuacao";
import Depoimentos from "@/components/sections/Depoimentos";
import ContatoCTA from "@/components/sections/ContatoCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Numeros />
      <Sobre />
      <AreasAtuacao />
      <Depoimentos />
      <ContatoCTA />
    </>
  );
}
