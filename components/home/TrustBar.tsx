import { DollarSign, MapPin, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Zero Commission",
    description: "No hidden fees"
  },
  {
    icon: MapPin,
    title: "Hyperlocal",
    description: "Local vendors nearby"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe & trusted"
  },
  {
    icon: Zap,
    title: "Go Live in Minutes",
    description: "Quick setup"
  },
  {
    icon: Users,
    title: "Vendor-First",
    description: "Supporting local businesses"
  }
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-gold" />
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