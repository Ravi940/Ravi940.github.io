import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MessageCircle, Download } from 'lucide-react';

export default function ContactSection() {
  const contactLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:your.email@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/1234567890' },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-12">
            Ready to bring your project to life? Get in touch and let's discuss how I can help.
          </p>

          {/* Contact Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 flex flex-col items-center gap-2 group"
                >
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 glow-cyan"
            >
              Hire Me Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
