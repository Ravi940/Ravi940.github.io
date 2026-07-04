export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-foreground/70 mb-2">
              © {currentYear} Your Name
            </p>
            <p className="text-foreground/60 text-sm">
              Content Writer • Developer • Designer
            </p>
          </div>

          <div className="text-center">
            <p className="text-foreground/70 font-medium">
              Available for Freelance Projects
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-sm">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-foreground/50 text-sm">
            Designed to showcase creativity and technical excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
