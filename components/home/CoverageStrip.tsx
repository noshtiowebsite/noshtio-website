const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune"
];

export default function CoverageStrip() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
          Serving 15+ Indian Cities
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, index) => (
            <div key={index} className="bg-gold text-navy px-6 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors duration-300">
              {city}
            </div>
          ))}
          <div className="bg-white/10 text-white px-6 py-3 rounded-full font-medium border border-white/20">
            +9 More Cities
          </div>
        </div>

        <p className="text-white/80 mt-8 text-lg">
          Expanding rapidly across India to bring local food to every doorstep
        </p>
      </div>
    </section>
  );
}