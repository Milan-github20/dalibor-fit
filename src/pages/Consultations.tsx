import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const Consultations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-4 text-foreground">
              <span className="text-gradient">Konsultacije</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Popuni upitnik ispod kako bih mogao da kreiram plan specifičan za tebe.
              Svaka informacija pomaže da program bude što precizniji.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultations;
