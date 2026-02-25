import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Apple, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const includes = [
  "Personaliziran plan treninga",
  "Smjernice za ishranu sa primjerima obroka",
  "Video uputstva za sve vježbe",
  "Trajanje programa: 8-12 nedjelja",
  "Praćenje napretka na nedjeljnom nivou",
];

const Program = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 section-padding">
        <div className="container mx-auto max-w-3xl mt-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 text-foreground">
              Online <span className="text-gradient">Program</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Program je dizajniran za sve koji žele strukturiran pristup treningu i ishrani —
              bez komplikacija, bez konfuzije. Idealan za početnike i srednji nivo koji traže
              jasno vođenje i konkretne rezultate.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-10 text-center md:text-left">
              <h2 className="font-heading text-2xl font-semibold text-foreground uppercase mb-6">
                Što dobijaš
              </h2>
              <ul className="space-y-4 inline-block text-left">
                {includes.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-primary/30 rounded-lg p-8 text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Cijena programa</p>
              <p className="font-heading text-5xl font-bold text-primary mb-6">€49</p>
              <button className="w-full sm:w-auto px-12 py-4 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wider font-semibold rounded hover:brightness-110 transition-all">
                Kupi Program
              </button>
              <p className="text-muted-foreground text-xs mt-4">
                Plaćanje će biti dostupno uskoro. Za sada, kontaktiraj nas direktno.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;
