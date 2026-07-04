import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      category: 'Writing',
      title: 'AI Blog Article',
      description: '1000-word SEO article discussing how AI is transforming small businesses.',
      tags: ['SEO', 'Writing'],
      actions: [
        { label: 'Read Article', icon: ExternalLink },
        { label: 'Download PDF', icon: ExternalLink },
      ],
    },
    {
      category: 'Writing',
      title: 'Product Description',
      description: 'Professional product description for wireless earbuds with before/after comparison.',
      tags: ['Copywriting', 'E-commerce'],
      actions: [
        { label: 'View Example', icon: ExternalLink },
      ],
    },
    {
      category: 'Coding',
      title: 'Python File Organizer',
      description: 'Automated file sorting tool with GUI. Detects file types, creates folders, and organizes files.',
      tags: ['Python', 'Automation'],
      actions: [
        { label: 'GitHub', icon: Github },
        { label: 'Live Demo', icon: ExternalLink },
      ],
    },
    {
      category: 'Coding',
      title: 'Portfolio Landing Page',
      description: 'Responsive portfolio website built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      actions: [
        { label: 'View', icon: ExternalLink },
        { label: 'Code', icon: Github },
      ],
    },
    {
      category: 'Coding',
      title: 'Task Manager App',
      description: 'Full-featured task management application with real-time updates.',
      tags: ['React', 'JavaScript'],
      actions: [
        { label: 'Demo', icon: ExternalLink },
      ],
    },
    {
      category: 'Design',
      title: 'Instagram Campaign',
      description: 'Social media campaign design with multiple post variations.',
      tags: ['Design', 'Social Media'],
      actions: [
        { label: 'View Gallery', icon: ExternalLink },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          A showcase of my best work across writing, development, and design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-foreground/60 bg-background px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                {project.actions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={i}
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-accent hover:bg-accent/10"
                    >
                      {action.label}
                      <Icon className="w-4 h-4 ml-1" />
                    </Button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
