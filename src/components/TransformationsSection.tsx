import { motion } from "framer-motion";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";

const transformations = [
  { image: transformation1, caption: "–12 kg / 12 nedelja" },
  { image: transformation2, caption: "–10 kg / 10 nedelja" },
  { image: transformation3, caption: "Recompozicija / 16 nedelja" },
];

const TransformationsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-16 text-foreground"
        >
          <span className="text-gradient">Transformacije</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-lg border border-border"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={`Transformacija ${index + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-card text-center">
                <p className="font-heading text-lg font-semibold text-primary uppercase tracking-wider">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
