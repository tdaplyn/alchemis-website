import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FeatureImg } from "@/components/FeatureImg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
          <FeatureImg />
          <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
