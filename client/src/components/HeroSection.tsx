import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/manus-storage/hero-bg_e2210eee.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-1" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Code That Works.{' '}
              <span className="gradient-text">Copy That Converts.</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
              I help businesses create compelling content, build responsive websites, and design professional digital assets. Combining writing, development, and design expertise with AI-assisted workflows.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 glow-cyan"
            >
              Let's Work Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              View My Work
            </Button>
          </div>

          {/* Status Badge */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground/70">Available for freelance projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
