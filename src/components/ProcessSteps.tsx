import { motion } from "framer-motion";
import { ClipboardList, Search, PenTool, Dumbbell, Trophy } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Popuni upitnik", description: "Ispuni detaljnu anketu o sebi" },
  { icon: Search, title: "Analiza ciljeva", description: "Tvoja situacija i ciljevi se analiziraju" },
  { icon: PenTool, title: "Personaliziran plan", description: "Kreira se plan samo za tebe" },
  { icon: Dumbbell, title: "Trening & praćenje", description: "Treniraš uz konstantnu podršku" },
  { icon: Trophy, title: "Rezultati", description: "Vidljiva transformacija tijela" },
];

const ProcessSteps = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-16 text-foreground"
        >
          Kako <span className="text-gradient">funkcioniše</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="flex flex-col items-center text-center flex-1 relative px-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-1">
                Korak {index + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
