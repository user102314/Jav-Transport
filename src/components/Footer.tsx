import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <Truck className="h-6 w-6" />
            JAF Déménagements
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#accueil" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#about" className="hover:text-primary transition-colors">À propos</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Comment ça marche</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} JAF Déménagements. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
