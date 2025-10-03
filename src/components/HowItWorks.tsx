import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Integrate your CRM and data sources in minutes with our simple setup process."
  },
  {
    number: "02",
    title: "Configure Your Agent",
    description: "Customize AI behavior, messaging style, and sales playbooks to match your brand."
  },
  {
    number: "03",
    title: "Deploy & Scale",
    description: "Launch your AI agents and watch them qualify leads, book meetings, and drive revenue."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in Three Simple Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 bg-card border-border h-full hover:border-primary/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
