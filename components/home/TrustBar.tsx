import { DollarSign, MapPin, Shield, Zap, Users } from "lucide-react";

type Feature = {
  icon?: React.ComponentType<{ className?: string }>
  emoji?: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: DollarSign,
    title: "Zero Commission Forever",
    description: "Keep 100% of every order"
  },
  {
    icon: MapPin,
    title: "Be a Founding Vendor",
    description: "Join our first 1,000 vendors"
  },
  {
    icon: Shield,
    title: "100% Profit Yours",
    description: "No hidden fees ever"
  },
  {
    icon: Zap,
    title: "Go Live in Minutes",
    description: "Quick free onboarding"
  },
  {
    icon: Users,
    title: "Free to Join",
    description: "No setup costs"
  },
  {
    emoji: '📸',
    title: "Photo Menu Upload",
    description: "Go live in 2 minutes"
  },
  {
    emoji: '🖥️',
    title: "Built-in POS",
    description: "Free with noshtio"
  }
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.emoji ? (
                  <span className="text-3xl" role="img" aria-hidden="true">{feature.emoji}</span>
                ) : (
                  feature.icon && <feature.icon className="w-8 h-8 text-gold" />
                )}
              </div>
              <h3 className="font-display font-semibold text-navy text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
