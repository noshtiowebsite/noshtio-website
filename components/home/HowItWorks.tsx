import { UserPlus, Upload, CreditCard } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Onboard Yourself",
    description: "Register free in 2 minutes"
  },
  {
    number: 2,
    icon: Upload,
    title: "List Your Menu",
    description: "Upload dishes and set your price"
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Earn Full Profit",
    description: "Keep 100% of every order, always"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Start Earning in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of vendors already earning more with zero commissions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Numbered circle */}
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-navy font-display font-bold text-2xl">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-gold" />
              </div>

              <h3 className="text-xl font-display font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gold transform -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gold rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}