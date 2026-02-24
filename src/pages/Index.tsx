import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import BenefitCards from "@/components/BenefitCards";
import ProgramFeatures from "@/components/ProgramFeatures";
import TransformationsSection from "@/components/TransformationsSection";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <BenefitCards />
      <ProgramFeatures />
      <TransformationsSection />
      <ProcessSteps />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
