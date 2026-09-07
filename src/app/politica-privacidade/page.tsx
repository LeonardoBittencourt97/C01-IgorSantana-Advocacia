import type { Metadata } from "next";
import { company, seo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade do escritório ${company.name}. Saiba como seus dados são tratados.`,
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="min-h-screen bg-bg py-32">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="font-serif text-4xl font-bold text-text-primary mb-8">
          Política de Privacidade
        </h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade descreve como o escritório {company.name} coleta, usa e
            protege as informações dos usuários do nosso site.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary pt-4">
            Informações Coletadas
          </h2>
          <p>
            O formulário de contato coleta apenas as informações necessárias
            para o atendimento: nome, e-mail, telefone e mensagem. Essas
            informações são encaminhadas diretamente pelo WhatsApp e não são
            armazenadas em nossos servidores.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary pt-4">
            Uso das Informações
          </h2>
          <p>
            As informações fornecidas são utilizadas exclusivamente para
            entrarmos em contato e prestarmos as informações solicitadas sobre
            nossos serviços jurídicos.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary pt-4">
            Cookies
          </h2>
          <p>
            Nosso site pode utilizar cookies para melhorar a experiência de
            navegação. Você pode configurar seu navegador para recusar cookies,
            embora isso possa afetar a funcionalidade do site.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary pt-4">
            Contato
          </h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade, entre em
            contato conosco pelo telefone {company.phone} ou pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
