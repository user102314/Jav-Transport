import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    lastName: "", firstName: "", phone: "", email: "",
    type: "particulier", origin: "", destination: "",
    date: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons très prochainement.",
    });
    setForm({ lastName: "", firstName: "", phone: "", email: "", type: "particulier", origin: "", destination: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact / Demande de devis</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez votre devis gratuit rapidement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card rounded-xl border border-border p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nom</label>
                <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Votre nom" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Prénom</label>
                <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Votre prénom" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Téléphone</label>
                <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+216 XX XXX XXX" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">E-mail</label>
                <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Type de déménagement</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Origine (ville / pays)</label>
                <Input name="origin" value={form.origin} onChange={handleChange} placeholder="Ex: Tunis, Tunisie" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Destination (ville / pays)</label>
                <Input name="destination" value={form.destination} onChange={handleChange} placeholder="Ex: Paris, France" required />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Date souhaitée</label>
              <Input name="date" type="date" value={form.date} onChange={handleChange} required />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Message ou remarques</label>
              <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Détaillez votre besoin..." rows={4} />
            </div>

            <Button type="submit" size="lg" className="w-full py-6 text-base font-semibold rounded-xl">
              <Send className="mr-2 h-5 w-5" />
              Envoyer ma demande de devis
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl border border-border p-6 space-y-5">
              <h3 className="font-semibold text-lg">Nos coordonnées</h3>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:+21671906446" className="text-muted-foreground hover:text-primary transition-colors">+216 71 906 446</a>
                  <br />
                  <a href="tel:+21671906449" className="text-muted-foreground hover:text-primary transition-colors">+216 71 906 449</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">E-mails</p>
                  <a href="mailto:demjaf@planet.tn" className="text-muted-foreground hover:text-primary transition-colors">demjaf@planet.tn</a>
                  <br />
                  <a href="mailto:g.managerdemjaf@orange.tn" className="text-muted-foreground hover:text-primary transition-colors">g.managerdemjaf@orange.tn</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Disponibilité</p>
                  <p className="text-muted-foreground">Service client 24h/24, 7j/7</p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 text-center">
              <p className="text-primary-foreground font-semibold mb-3">Besoin d'aide immédiate ?</p>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full rounded-xl font-semibold"
              >
                <a href="tel:+21671906446">Appelez-nous maintenant</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
