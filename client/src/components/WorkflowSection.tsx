import { ArrowDown } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    { title: 'Discuss Project', description: 'Understand your goals and requirements' },
    { title: 'Research', description: 'Gather insights and competitive analysis' },
    { title: 'Planning', description: 'Create detailed strategy and timeline' },
    { title: 'Execution', description: 'Build and deliver high-quality work' },
    { title: 'Revision', description: 'Refine based on your feedback' },
    { title: 'Delivery', description: 'Final handoff and support' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Workflow</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          A structured approach to ensure quality and clarity at every stage
        </p>

        <div className="max-w-2xl">
          {steps.map((step, idx) => (
            <div key={idx}>
              <div className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-accent to-accent/30 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
