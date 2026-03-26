import { motion } from "framer-motion";
import { Truck, Package, CalendarDays } from "lucide-react";

const stats = [
  { icon: Truck, value: "+30 000", label: "Déménagements réalisés" },
  { icon: Package, value: "+4 500", label: "Stockages effectués" },
  { icon: CalendarDays, value: "65 ans", label: "D'existence" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <s.icon className="h-10 w-10 text-primary-foreground/70 mb-3" />
              <span className="text-4xl md:text-5xl font-extrabold text-primary-foreground">{s.value}</span>
              <span className="text-sm text-primary-foreground/70 mt-1 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
