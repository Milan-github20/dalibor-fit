import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-foreground"
        >
          Spreman da <span className="text-gradient">počneš</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
        >
          Izaberi put koji ti najviše odgovara i napravi prvi korak ka transformaciji.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/program"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wider font-semibold rounded hover:brightness-110 transition-all"
          >
            Kupi Program
          </Link>
          <Link
            to="/consultations"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-heading text-lg uppercase tracking-wider font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Konsultacije
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
