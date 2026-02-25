import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";
import transformation4 from "@/assets/transformation-4.jpg";
import transformation5 from "@/assets/transformation-5.jpg";
import transformation6 from "@/assets/transformation-6.jpg";

// Priče transformacija — video + ime + citat (kao na referentnim slikama)
const transformationStories = [
  {
    videoId: "L4-QpckHfNo",
    name: "Filip",
    quote: "Dalibor je uvijek bio tu za mene, a posebno u momentima kada sam gubio motivaciju.",
  },
  {
    videoId: "Rk2MTGqmAho",
    name: "Petar",
    quote: "Cilj nam je bio da skinem 15 kg za 3 mjeseca. Ipak, za 2 mjeseca uspio sam da skinem čak 14 kg.",
    quoteHighlight: "14 kg",
  },
  {
    videoId: "Miti7VQk56w",
    name: "Marko",
    quote: "Strukturiran plan i podrška su napravili razliku. Preporučujem svima koji žele ozbiljne rezultate.",
  },
];

// Dodaj još slika: stavi nove fajlove u src/assets (npr. transformation-4.jpg) i dodaj ih ovdje
const transformationImages = [
  { image: transformation1 },
  { image: transformation2 },
  { image: transformation3 },
  { image: transformation4 },
  { image: transformation5 },
  { image: transformation6 },
];

// Ispis citata s opcionalnim istaknutim dijelom (primary boja)
const QuoteText = ({
  quote,
  highlight,
}: {
  quote: string;
  highlight?: string;
}) => {
  if (!highlight) return <p className="text-muted-foreground leading-relaxed">{quote}</p>;
  const parts = quote.split(highlight);
  return (
    <p className="text-muted-foreground leading-relaxed">
      {parts[0]}
      <span className="text-primary font-semibold">{highlight}</span>
      {parts[1]}
    </p>
  );
};

const Transformacije = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 section-padding relative overflow-hidden">
        {/* Dekorativni blokovi u pozadini */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-primary/[0.07] blur-3xl" />
          <div className="absolute bottom-32 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto relative mt-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase text-center mb-4 text-foreground">
              <span className="text-gradient">Transformacije</span>
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Priče ljudi koji su promijenili tijelo i navike uz DA Fitness program.
            </p>
          </motion.div>

          {/* Video + citat kartice (kao na referenti) */}
          <div className="space-y-24 md:space-y-32">
            {transformationStories.map((story, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.article
                  key={story.videoId + story.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Video — uvijek prvi u mobilnom, na desktopu mijenja redoslijed */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-lg aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${story.videoId}?rel=0`}
                        title={`${story.name} — transformacija`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Tekst — naslov + citat */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative">
                      <div className="absolute -top-2 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-foreground mb-6 relative">
                        {story.name.endsWith("a")
                          ? `${story.name.toUpperCase()} TRANSFORMACIJA`
                          : `${story.name.toUpperCase()} TRANSFORMACIJA`}
                      </h2>
                      <div className="relative">
                        <QuoteText quote={story.quote} highlight={story.quoteHighlight} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Galerija slika — carousel s dugmićima za listanje */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-2xl font-semibold uppercase text-foreground mt-24 mb-8"
          >
            Galerija
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-7xl mx-auto mb-12 px-1 md:px-2"
          >
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-3">
                {transformationImages.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-3 basis-full md:basis-1/3 min-w-0 shrink-0">
                    <div className="group rounded-xl border border-border shadow-md bg-card overflow-hidden">
                      <div className="relative w-full overflow-hidden bg-muted pb-[75%] md:pb-[100%]">
                        <div className="absolute inset-0">
                          <img
                            src={item.image}
                            alt={`Transformacija ${index + 1}`}
                            className="size-full min-w-0 min-h-0 max-w-full max-h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 h-10 w-10 border-border bg-card/90 text-foreground hover:bg-card hover:text-foreground disabled:opacity-30" />
              <CarouselNext className="right-2 md:right-4 h-10 w-10 border-border bg-card/90 text-foreground hover:bg-card hover:text-foreground disabled:opacity-30" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transformacije;
