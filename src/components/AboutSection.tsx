import { motion } from "framer-motion";
import { Building2, History } from "lucide-react";

const timeline = [
  { year: "1950", text: "Fondation de l'entreprise familiale à Tunis." },
  { year: "1970", text: "Expansion vers le stockage sécurisé et le transport international." },
  { year: "1990", text: "Obtention des accréditations internationales." },
  { year: "2010", text: "Modernisation de la flotte et des entrepôts." },
  { year: "Aujourd'hui", text: "Leader nord-africain avec +30 000 déménagements réalisés." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de JAF Déménagements</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Société familiale, leader tunisien et nord-africain du déménagement et du stockage depuis les années 1950.
            Nous offrons un service intégral « porte à porte » : tri, emballage, étiquetage, chargement, transport,
            déchargement, déballage et retrait des déchets et cartons.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-8 justify-center text-primary">
            <History className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Notre histoire</h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <p className="text-muted-foreground text-sm mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
