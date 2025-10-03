import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Zap, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Lead Qualification",
    description: "AI agents analyze and score leads based on behavior, intent, and fit to prioritize your pipeline."
  },
  {
    icon: MessageSquare,
    title: "Autonomous Conversations",
    description: "Natural, context-aware interactions that nurture prospects through personalized messaging at scale."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast revenue, identify opportunities, and optimize your sales strategy with data-driven insights."
  },
  {
    icon: Zap,
    title: "Instant Response Time",
    description: "Engage leads within seconds of inquiry, maximizing conversion rates with 24/7 availability."
  },
  {
    icon: Users,
    title: "Seamless CRM Integration",
    description: "Sync effortlessly with your existing tools—Salesforce, HubSpot, and more."
  },
  {
    icon: Clock,
    title: "Continuous Learning",
    description: "AI adapts and improves over time, learning from every interaction to boost performance."
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supercharge Your Sales Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI agents handle the heavy lifting so your team can focus on closing deals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
