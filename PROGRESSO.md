# PROGRESSO — C01-IgorSantana-Advocacia

## Modo: REBUILD

## Status: CONCLUÍDO

## Fase atual: FASE 4 — DEPLOY E GITHUB

## Repositório
- GitHub: https://github.com/LeonardoBittencourt97/C01-IgorSantana-Advocacia
- Privado: Não (público)

## Stack
- Next.js 16.3.4 (Turbopack)
- React 19.1.0
- TypeScript 5.8.2
- Tailwind CSS v4
- GSAP 3.x (substituiu Framer Motion)
- Lucide React

## Checklist de páginas:
- [x] layout.tsx + globals.css (design system completo)
- [x] page.tsx (home com Hero, Numeros, Sobre, AreasAtuacao, Depoimentos, ContatoCTA)
- [x] Header.tsx (nav responsivo, backdrop blur, hamburger mobile)
- [x] Footer.tsx (3 colunas, links, social icons)
- [x] LayoutClient.tsx (condicional header/footer para /links)
- [x] /sobre (biografia, formação, experiência timeline, comissão OAB)
- [x] /areas-de-atuacao (6 áreas com ícones, features, layout alternado)
- [x] /contato (formulário + info cards + Google Maps)
- [x] /blog (3 posts sobre Direito Trabalhista)
- [x] /blog/[slug] (posts detalhados com JSON-LD)
- [x] /links (linktree minimalista, noindex/nofollow)
- [x] /politica-privacidade
- [x] SEO (metadata + JSON-LD + sitemap + robots.txt + llms.txt)
- [x] Breadcrumbs em subpáginas
- [x] WhatsApp flutuante
- [x] ScrollReveal animations (GSAP)
- [x] AnimatedCounter para métricas (GSAP)
- [x] Acessibilidade (skip link, labels, aria, contraste)
- [x] Middleware (Vary header + agentic readiness)
- [x] Error pages (not-found, error, loading)
- [x] Favicons (gerados do logo.png)
- [x] manifest.json
- [x] robots.txt (Next.js route)
- [x] llms.txt

## Componentes criados:
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/layout/LayoutClient.tsx
- src/components/sections/Hero.tsx
- src/components/sections/Sobre.tsx
- src/components/sections/AreasAtuacao.tsx
- src/components/sections/Depoimentos.tsx
- src/components/sections/Numeros.tsx
- src/components/sections/ContatoCTA.tsx
- src/components/ui/ScrollReveal.tsx
- src/components/ui/AnimatedCounter.tsx
- src/components/ui/WhatsAppButton.tsx
- src/components/ui/Breadcrumbs.tsx
- src/app/links/LinksClient.tsx
- src/app/contato/ContatoForm.tsx

## Assets:
- [x] logo.png (logo quadrada)
- [x] logo-horizontal.jpg (logo barra)
- [x] igor-foto.jpg (foto do advogado)
- [x] fachada.webp (fachada do escritório)
- [x] escritorio-1.webp a escritorio-4.webp (fotos do escritório)
- [x] favicon.ico, favicon.svg, favicon-16x16.png, favicon-32x32.png
- [x] apple-touch-icon.png
- [x] android-chrome-192x192.png, android-chrome-512x512.png

## Pendências do cliente:
- [ ] E-mail de contato (não informado — manter WhatsApp)
- [ ] Domínio final do site (usando Vercel por enquanto)
- [ ] Verificar se as fotos do escritório estão corretas
- [ ] Adicionar seção de Cases/Resultados (métricas reais)
- [ ] Configurar Nodemailer (quando tiver email)

## Último commit: rebuild: reconstrução completa do site com GSAP + Next.js 16
