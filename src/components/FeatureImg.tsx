import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/Image_kiy8rkkiy8rkkiy8.webp";

export const FeatureImg = () => {
  return (
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '50vh' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
      </div>
    </section>



  );
};
