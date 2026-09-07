import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // Agentic readiness: serve markdown for LLM crawlers
  if (
    accept.includes("text/markdown") ||
    accept.includes("text/plain") ||
    accept.includes("application/llmstxt")
  ) {
    if (pathname === "/") {
      return new Response(
        `# Igor Santana Advocacia

> Escritório de advocacia trabalhista em Curitiba/PR com atuação em todo o Brasil.

## Sobre
Dr. Igor Santana é advogado trabalhista, sócio-proprietário do escritório Igor Santana Advocacia. Membro Relator da Comissão do Pacto Global e Sustentabilidade da OAB/PR.

## Serviços
- Acidente de trabalho e estabilidade acidentária
- Reconhecimento de vínculo empregatício
- Estabilidade no emprego (gestante, CIPA, acidentado)
- Horas extras e benefícios não pagos
- Demissão sem justa causa e verbas rescisórias
- Contratos de trabalho

## Contato
- Telefone: (41) 3262-7377
- Endereço: Rua Pedro Gusso, 4127, Sala 6 - CIC, Curitiba/PR, 81315-000
`,
        {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }
      );
    }
  }

  // Add Vary header
  const res = NextResponse.next();
  res.headers.set("Vary", "Accept");
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
