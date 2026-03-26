import { motion } from "framer-motion";
import {
  Truck, Ship, Plane, MapPin, Package, Car, PawPrint, Palette, Building2,
} from "lucide-react";

const services = [
  { icon: Truck, title: "Déménagements nationaux & internationaux", desc: "Transport sécurisé de vos biens partout en Tunisie et dans le monde." },
  { icon: Ship, title: "Transport maritime", desc: "Solutions Ocean Freight pour vos envois longue distance par voie maritime." },
  { icon: Plane, title: "Transport aérien", desc: "Expédition rapide Air Freight pour les envois urgents." },
  { icon: MapPin, title: "Transport routier", desc: "Land Transportation fiable à travers l'Afrique du Nord et l'Europe." },
  { icon: Package, title: "Stockage sécurisé", desc: "Entrepôts modernes et surveillés pour un stockage temporaire ou longue durée." },
  { icon: Car, title: "Transport de véhicules", desc: "Car Shipping sécurisé pour vos véhicules personnels ou de collection." },
  { icon: PawPrint, title: "Relocalisation d'animaux", desc: "Pet Relocation avec soins adaptés pour le bien-être de vos compagnons." },
  { icon: Palette, title: "Déménagement d'œuvres d'art", desc: "Fine Art moving avec emballage sur mesure et manipulation experte." },
  { icon: Building2, title: "Déménagement de bureaux", desc: "Office Moving clé en main pour minimiser l'interruption de votre activité." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services de déménagement et logistique adaptée à chaque besoin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
