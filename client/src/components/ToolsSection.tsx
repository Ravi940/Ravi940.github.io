export default function ToolsSection() {
  const tools = [
    'ChatGPT',
    'VS Code',
    'GitHub',
    'Canva',
    'Figma',
    'Google Docs',
    'MS Word',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tools I <span className="gradient-text">Use</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
          A carefully curated stack of tools and technologies for efficient, professional work
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-300 text-center"
            >
              <span className="text-foreground font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
