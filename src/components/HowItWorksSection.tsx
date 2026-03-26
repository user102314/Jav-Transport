import { motion } from "framer-motion";
import { FileText, CheckCircle2, Truck, PackageCheck } from "lucide-react";

const steps = [
  { icon: FileText, num: "1", title: "Demande de devis", desc: "Nous vous établissons un devis détaillé et transparent." },
  { icon: CheckCircle2, num: "2", title: "Confirmation", desc: "Vous confirmez et nous planifions ensemble chaque détail." },
  { icon: Truck, num: "3", title: "Déménagement", desc: "Notre équipe réalise votre déménagement avec soin et professionnalisme." },
  { icon: PackageCheck, num: "4", title: "Livraison", desc: "Vous recevez vos biens en toute sécurité à destination." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça fonctionne</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et rassurant en 4 étapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10 shadow-lg">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-1">ÉTAPE {s.num}</span>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
