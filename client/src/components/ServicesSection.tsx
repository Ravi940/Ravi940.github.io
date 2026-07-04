import { Card } from '@/components/ui/card';
import { PenTool, Code, Palette } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: PenTool,
      title: 'Content Writing',
      items: ['Blog Posts', 'SEO Articles', 'Product Descriptions', 'Website Copy', 'LinkedIn Posts'],
    },
    {
      icon: Code,
      title: 'Development',
      items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Responsive Websites', 'Bug Fixes'],
    },
    {
      icon: Palette,
      title: 'Design',
      items: ['Social Media Posts', 'Flyers', 'Presentations', 'Banners', 'Canva Design'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          Comprehensive services tailored to bring your vision to life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-foreground/70 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
