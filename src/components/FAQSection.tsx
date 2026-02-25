import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Ne znam da li ću uspjeti da istrajem do cilja?",
    answer:
      "Razumijem, vjerovatno si već pokušavao i nisi uspio, i zato je razumljivo da imaš strah. Baš zato sam ja tu za tebe da te vodim i ne dopustim da ne istraješ.",
  },
  {
    question: "Da li ovaj program stvarno vrijedi?",
    answer:
      "Ako tebi vrijedi da za 12 nedjelja izgubiš do 20 kilograma i da se osjećaš bolje, jače i imaš više samopouzdanja, onda vrijedi. Ako ti tako nešto nije bitno, onda ne vrijedi.",
  },
  {
    question: "Da li je ovaj program najbolje rješenje za mene?",
    answer:
      "Ako si već pokušavao da skineš kilograme i nisi uspio, nervira te što se gojiš u predjelu stomaka, što se ne osjećaš dobro u svom tijelu i imaš manjak energije — onda definitivno jeste za tebe!",
  },
  {
    question: "Hoće li mi ovaj program stvarno pomoći da se riješim viška kilograma?",
    answer:
      "Ako se budeš pridržavao barem 70% programa, koji nije sam po sebi zahtjevan niti komplikovan, pomoći će ti 100%.",
  },
  {
    question: "Da li je program komplikovan za primjenu?",
    answer:
      "Najveća prednost ovog programa je ta što je ekstremno lak za primjenu, nebitno da li si početnik ili neko ko ima iskustva. Sistem pravimo tako da ti bude veoma jednostavan i da ti da željene rezultate.",
  },
  {
    question: "Šta da radim ako ne uspijem da skinem višak kilograma za 3 mjeseca koliko traje program?",
    answer:
      "Ako si se pridržavao barem 70% onoga što smo se dogovorili, ne postoji mogućnost da se to desi. Ako se nekim čudom to desi, ne brini — tu sam za tebe i produžavamo saradnju besplatno dok ne dostignemo dogovoreni cilj!",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-10 md:mb-16 text-foreground"
        >
          Česta <span className="text-gradient">pitanja</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border bg-card px-4 md:px-6 rounded-lg mb-3 last:mb-0"
              >
                <AccordionTrigger className="font-heading text-left text-base md:text-lg hover:no-underline hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
