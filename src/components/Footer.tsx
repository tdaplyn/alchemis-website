export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alchemis AI
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Alchemis AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
