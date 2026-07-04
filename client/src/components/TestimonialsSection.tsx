import { Card } from '@/components/ui/card';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Clients <span className="gradient-text">Say</span>
        </h2>

        <Card className="p-12 bg-card border-border text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Testimonials Coming Soon</h3>
          <p className="text-foreground/70 text-lg mb-4">
            I'm currently building long-term relationships with clients and creating success stories together.
          </p>
          <p className="text-foreground/60 italic">
            Let's create the next success story together.
          </p>
        </Card>
      </div>
    </section>
  );
}
