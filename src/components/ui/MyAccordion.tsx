
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  interface FAQItem {
    question: string;
    answer: string;
  }
function MyAccordion({ question, answer }: FAQItem){
    return (
<Accordion type="single" collapsible className="text-white">
  <AccordionItem value="item-1" className="border rounded-3xl  ">
    <AccordionTrigger >{question}</AccordionTrigger>
    <AccordionContent>
      {answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>

    );
}
function FAQ() {
    const faqs: FAQItem[] = [
      {
        question: "1. O que é o Digital Fácil e como pode me ajudar na gestão das redes sociais?",
        answer: "O Digital Fácil é uma plataforma digital que oferece ferramentas simples e práticas para facilitar a gestão eficaz das redes sociais. Ele permite alcançar resultados consistentes mesmo sem amplo conhecimento em Marketing Digital, simplificando a execução das estratégias para manter uma presença digital marcante.",
      },
      {
        question: "2. Quais são os benefícios de usar o Digital Fácil para a minha presença digital?",
        answer: "Com o Digital Fácil, você terá acesso a ferramentas que simplificam a gestão das redes sociais, ajudando na execução prática das estratégias de Marketing Digital. Isso resulta em uma presença consistente e eficaz online, mesmo sem expertise técnica.",
      },
      {
        question: "3. Preciso ter conhecimento avançado em Marketing Digital para usar o Digital Fácil?",
        answer: "Não, o Digital Fácil foi projetado para ser intuitivo e acessível a todos. Ele oferece uma abordagem simplificada para ajudar usuários de todos os níveis de conhecimento a gerir suas redes sociais com facilidade.",
      },
      {
        question: "4. Quais plataformas de mídia social o Digital Fácil suporta?",
        answer: "O Digital Fácil é compatível com várias plataformas de mídia social, incluindo Facebook, Instagram, Twitter, LinkedIn e outras, oferecendo ferramentas para gerenciar conteúdo em múltiplas plataformas.",
      },
      {
        question: "5. O Digital Fácil oferece tutoriais ou guias para iniciantes?",
        answer: "Sim, o Digital Fácil disponibiliza tutoriais e guias passo a passo para ajudar iniciantes a se familiarizarem com a plataforma e suas funcionalidades.",
      },
      {
        question: "6. Como o Digital Fácil simplifica a execução das estratégias de marketing digital?",
        answer: "O Digital Fácil oferece processos simplificados e ferramentas prontas para uso, facilitando a gestão diária das redes sociais, eliminando a complexidade na execução das estratégias de marketing.",
      },
      {
        question: "7. O Digital Fácil oferece ferramentas prontas para o dia a dia de trabalho?",
        answer: "Sim, o Digital Fácil disponibiliza ferramentas e processos prontos para utilização diária, permitindo que você gerencie suas redes sociais de forma mais eficiente.",
      },
      {
        question: "8. Posso agendar postagens e gerenciar conteúdo de forma eficaz com o Digital Fácil?",
        answer: "Sim, o Digital Fácil oferece funcionalidades para agendar postagens, gerenciar conteúdo e acompanhar o desempenho das suas campanhas de mídia social.",
      },
      {
        question: "9. Há algum suporte ou assistência disponível para os usuários do Digital Fácil?",
        answer: "Sim, temos uma equipe de suporte dedicada para ajudar com quaisquer dúvidas ou problemas que possam surgir durante o uso do Digital Fácil.",
      },
      {
        question: "10. O Digital Fácil é compatível com dispositivos móveis?",
        answer: "Sim, o Digital Fácil é responsivo e pode ser acessado através de dispositivos móveis, proporcionando flexibilidade para gerir suas redes sociais de qualquer lugar.",
      },
    ];
  
    return (
      <div className="flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <MyAccordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  }

  export default  FAQ;