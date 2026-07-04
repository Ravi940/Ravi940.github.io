import { CheckCircle2 } from 'lucide-react';

export default function WhyHireSection() {
  const reasons = [
    'Fast Communication',
    'Clean Code',
    'SEO-Friendly Writing',
    'Modern Design',
    'AI-Assisted Workflow with Human Review',
    'Reliable Delivery',
    'Attention to Detail',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Hire Me</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-12">
            I bring a combination of technical expertise, creative thinking, and professional reliability to every project.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
