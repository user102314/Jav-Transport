import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Camion de déménagement professionnel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
            Votre déménageur professionnel en Tunisie
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Déménagements nationaux et internationaux – Stockage sécurisé – Accompagnement clé en main
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base font-semibold px-8 py-6 rounded-xl">
              <a href="#contact">
                Demandez un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold px-8 py-6 rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
            >
              <a href="tel:+21671906446">
                <Phone className="mr-2 h-5 w-5" />
                Contactez-nous 24/7
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
