import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "noshtio has transformed my home kitchen business. Zero commissions mean I can finally make a living doing what I love - cooking traditional Lucknowi dishes for my community.",
    name: "Priya Sharma",
    location: "Lucknow",
    role: "Home Kitchen Owner"
  },
  {
    quote: "As a small restaurant in Delhi, we were struggling with high platform fees. noshtio's zero commission model has increased our profits by 30% and helped us reach more customers.",
    name: "Rahul Verma",
    location: "Delhi",
    role: "Restaurant Owner"
  },
  {
    quote: "My Jaipur sweets business was barely surviving with all the commissions. Now with noshtio, I keep all my earnings and have grown from 50 to 200 daily orders in just 6 months.",
    name: "Meena Choudhary",
    location: "Jaipur",
    role: "Sweets & Bakery Owner"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            What Our Vendors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real vendors who have transformed their businesses with noshtio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 relative">
              <Quote className="w-8 h-8 text-gold mb-4" />
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                  <span className="text-gold font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gold">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}