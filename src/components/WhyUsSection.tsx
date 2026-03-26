import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe, Headphones, Award, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Structures sécurisées", desc: "Entrepôts modernes et surveillés 24h/24 pour la sécurité de vos biens." },
  { icon: Users, title: "Équipe qualifiée", desc: "Des professionnels formés et expérimentés pour chaque déménagement." },
  { icon: MapPin, title: "Coordinateurs expérimentés", desc: "Un interlocuteur dédié qui vous accompagne de A à Z." },
  { icon: Globe, title: "Accréditations internationales", desc: "Certifications reconnues à l'échelle mondiale pour les transferts internationaux." },
  { icon: Headphones, title: "Service 24/7", desc: "Disponibles à tout moment pour répondre à vos besoins." },
  { icon: Award, title: "65 ans d'expertise", desc: "Un savoir-faire transmis et perfectionné depuis les années 1950." },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            JAF Déménagements, votre partenaire de déménagement et de stockage en Tunisie et en Afrique du Nord depuis les années 1950.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
