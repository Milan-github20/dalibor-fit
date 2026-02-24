import { motion } from "framer-motion";
import { Flame, Utensils, HeadsetIcon } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Gubitak masnoće",
    description: "Sistem koji funkcioniše bez konfuzije i nepotrebnih komplikacija.",
  },
  {
    icon: Utensils,
    title: "Jasan plan ishrane",
    description: "Jednostavna, praktična struktura — bez teorije i praznih priča.",
  },
  {
    icon: HeadsetIcon,
    title: "Kontinuirana podrška",
    description: "Nisi sam u procesu. Tu sam od početka do rezultata.",
  },
];

const BenefitCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-16"
        >
          Zašto <span className="text-gradient">DA Fitness</span>?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;
