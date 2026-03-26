import { useState } from "react";
import { Menu, X, Sun, Moon, Truck } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Contact / Devis", href: "#contact" },
];

export default function Header() {
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Truck className="h-7 w-7" />
          <span>JAF Déménagements</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Button asChild className="hidden md:inline-flex" size="sm">
            <a href="#contact">Devis gratuit</a>
          </Button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full mt-3" size="sm">
            <a href="#contact" onClick={() => setMobileOpen(false)}>Devis gratuit</a>
          </Button>
        </div>
      )}
    </header>
  );
}
