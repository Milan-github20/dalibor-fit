import { motion } from "framer-motion";
import { Dumbbell, Apple, BarChart3, MessageCircle } from "lucide-react";

const features = [
  { icon: Dumbbell, text: "Strukturirani planovi treninga sa video uputstvima" },
  { icon: Apple, text: "Smernice za ishranu i primeri obroka" },
  { icon: BarChart3, text: "Praćenje napretka" },
  { icon: MessageCircle, text: "Konstantna podrška tokom programa" },
];

const ProgramFeatures = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-16 text-foreground"
        >
          Šta <span className="text-gradient">uključuje</span> program
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-6"
            >
              <feature.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
