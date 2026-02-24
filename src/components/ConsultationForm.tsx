import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Ime je obavezno").max(100),
  email: z.string().trim().email("Unesite validan email").max(255),
  age: z.string().min(1, "Unesite godine"),
  height: z.string().min(1, "Unesite visinu"),
  weight: z.string().min(1, "Unesite težinu"),
  gender: z.string().min(1, "Izaberite pol"),
  healthCondition: z.string().max(1000).optional(),
  goals: z.string().trim().min(5, "Opišite svoje ciljeve").max(1000),
  nutritionHabits: z.string().max(1000).optional(),
  trainingExperience: z.string().min(1, "Izaberite iskustvo"),
  availableTime: z.string().min(1, "Izaberite dostupno vreme"),
  additionalNotes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate sending (placeholder for EmailJS integration)
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    toast.success("Upitnik je uspješno poslan!");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-primary text-4xl">✓</span>
        </div>
        <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
          Hvala ti!
        </h3>
        <p className="text-muted-foreground text-lg">
          Tvoj upitnik je primljen. Javiću ti se u najkraćem roku.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const errorClass = "text-destructive text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      {/* Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Ime i prezime *</label>
          <input {...register("fullName")} className={inputClass} placeholder="Petar Petrović" />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="email@primer.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Age, Height, Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Godine *</label>
          <input {...register("age")} type="number" className={inputClass} placeholder="25" />
          {errors.age && <p className={errorClass}>{errors.age.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Visina (cm) *</label>
          <input {...register("height")} type="number" className={inputClass} placeholder="180" />
          {errors.height && <p className={errorClass}>{errors.height.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Težina (kg) *</label>
          <input {...register("weight")} type="number" className={inputClass} placeholder="85" />
          {errors.weight && <p className={errorClass}>{errors.weight.message}</p>}
        </div>
      </div>

      {/* Gender */}
      <div>
        <label className={labelClass}>Pol *</label>
        <select {...register("gender")} className={inputClass}>
          <option value="">Izaberi...</option>
          <option value="male">Muški</option>
          <option value="female">Ženski</option>
        </select>
        {errors.gender && <p className={errorClass}>{errors.gender.message}</p>}
      </div>

      {/* Health */}
      <div>
        <label className={labelClass}>Zdravstveno stanje / povrede</label>
        <textarea {...register("healthCondition")} className={inputClass} rows={3} placeholder="Opišite eventualne zdravstvene probleme ili povrede..." />
      </div>

      {/* Goals */}
      <div>
        <label className={labelClass}>Ciljevi *</label>
        <textarea {...register("goals")} className={inputClass} rows={3} placeholder="Što želite da postignete?" />
        {errors.goals && <p className={errorClass}>{errors.goals.message}</p>}
      </div>

      {/* Nutrition */}
      <div>
        <label className={labelClass}>Navike u ishrani</label>
        <textarea {...register("nutritionHabits")} className={inputClass} rows={3} placeholder="Opišite kako se trenutno hranite..." />
      </div>

      {/* Training Experience */}
      <div>
        <label className={labelClass}>Iskustvo u treningu *</label>
        <select {...register("trainingExperience")} className={inputClass}>
          <option value="">Izaberi...</option>
          <option value="beginner">Početnik (0-1 godina)</option>
          <option value="intermediate">Srednji nivo (1-3 godine)</option>
          <option value="advanced">Napredni (3+ godina)</option>
        </select>
        {errors.trainingExperience && <p className={errorClass}>{errors.trainingExperience.message}</p>}
      </div>

      {/* Available Time */}
      <div>
        <label className={labelClass}>Dostupno vreme za trening *</label>
        <select {...register("availableTime")} className={inputClass}>
          <option value="">Izaberi...</option>
          <option value="2-3">2-3 puta nedjeljno</option>
          <option value="3-4">3-4 puta nedjeljno</option>
          <option value="5+">5+ puta nedjeljno</option>
        </select>
        {errors.availableTime && <p className={errorClass}>{errors.availableTime.message}</p>}
      </div>

      {/* Additional notes */}
      <div>
        <label className={labelClass}>Dodatne napomene</label>
        <textarea {...register("additionalNotes")} className={inputClass} rows={3} placeholder="Bilo što što smatrate da je bitno..." />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wider font-semibold rounded hover:brightness-110 transition-all disabled:opacity-50"
      >
        {isSubmitting ? "Slanje..." : "Pošalji upitnik"}
      </button>
    </form>
  );
};

export default ConsultationForm;
