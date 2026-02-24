import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

// Ubaci pravi video: stavi fajl u public/ i postavi putanju (npr. /hero-video.mp4)
const HERO_VIDEO_SRC = ""; // npr. "/hero-video.mp4"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero video (ako je HERO_VIDEO_SRC postavljen) ili pozadinska slika */}
      {HERO_VIDEO_SRC ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      )}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground mb-4"
        >
          Promijeni <span className="text-gradient">tijelo</span>. Promijeni <span className="text-gradient">život</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Online fitnes coaching sa Daliborom Andrićem — rezultati koji se vide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
