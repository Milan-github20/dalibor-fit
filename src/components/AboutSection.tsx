import { motion } from "framer-motion";
import daliborImage from "@/assets/dalibor.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/80 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Lijevo — tekst */}
          <div className="order-2 lg:order-1">
            <p className="font-heading text-sm uppercase tracking-widest text-primary mb-3">
              Ko sam ja?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Ja sam Dalibor Andrić
            </h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                Diplomirao sam na Fakultetu sporta i fizičkog vaspitanja, na akademskim studijama
                Beogradskog univerziteta i stekao zvanje &quot;Profesor sporta i fizičkog vaspitanja&quot;.
              </p>
              <p>
                Više od 8 godina bavim se fitnesom i treningom rekreativaca. Prvenstveno sam i sam
                imao problem s viškom kilograma, lošim nivoom snage i kondicije — i to je bio moj
                pokretač. Uz dodatne edukacije prošao sam mnogobrojne metode treninga i ishrane i
                na taj način ostvario značajan rezultat prvenstveno na sebi: od gojaznog i nespretnog
                pubertetlije do sposobnog i zadovoljnog muškarca. Zatim sam to iskustvo primijenio
                i u radu s klijentima.
              </p>
              <p>
                Niko nema ništa protiv toga da izgleda i osjeća se bolje — zar to nije jedna od
                definicija sreće? :) Upravo zato sam sada ovdje s ciljem da pomognem i tebi da
                uzmeš svoj komad sreće koji ti pripada!
              </p>
            </div>
          </div>

          {/* Desno — fotografija */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border border-border shadow-2xl"
            >
              <img
                src={daliborImage}
                alt="Dalibor Andrić — trener"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              {/* Placeholder ako slika ne postoji */}
              <div
                className="absolute inset-0 bg-muted flex flex-col items-center justify-center text-muted-foreground p-6 text-center"
                style={{ display: "none" }}
              >
                <span className="font-heading text-lg uppercase">Dalibor Andrić</span>
                <span className="text-sm mt-2">
                  Slika trenera: <code className="bg-background/50 px-1 rounded">src/assets/dalibor.jpg</code>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
