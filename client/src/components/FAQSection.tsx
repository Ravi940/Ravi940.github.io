import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer: 'Usually within a few hours. I prioritize communication and keep clients updated throughout the project.',
    },
    {
      question: 'Can you work with AI?',
      answer: 'Yes. I use AI responsibly to speed up research, drafting, and development while ensuring all deliverables are reviewed and refined for quality.',
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Absolutely. I include revision rounds in my projects to ensure you\'re completely satisfied with the final deliverable.',
    },
    {
      question: 'Can you work remotely?',
      answer: 'Yes, I work entirely remotely. I\'m available for projects worldwide and can accommodate different time zones.',
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'Pricing varies based on project scope and complexity. I offer flexible arrangements including hourly rates, project-based pricing, and retainer options.',
    },
    {
      question: 'How do we get started?',
      answer: 'Simply reach out through the contact section, describe your project, and we\'ll discuss your needs, timeline, and pricing.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          Quick answers to common questions about working with me
        </p>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
