import { Progress } from '@/components/ui/progress';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Git', level: 80 },
        { name: 'C++', level: 70 },
      ],
    },
    {
      category: 'Writing',
      skills: [
        { name: 'SEO', level: 90 },
        { name: 'Research', level: 90 },
        { name: 'Editing', level: 80 },
      ],
    },
    {
      category: 'Design',
      skills: [
        { name: 'Canva', level: 100 },
        { name: 'Figma', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          A diverse toolkit built through years of hands-on experience
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-accent text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-card"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
