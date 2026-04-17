import { Home, Utensils, ChefHat, Package, Cake, Star } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Home Kitchens",
    description: "Homemade meals from local homes"
  },
  {
    icon: Utensils,
    title: "Restaurants",
    description: "Traditional and modern eateries"
  },
  {
    icon: ChefHat,
    title: "Cloud Kitchens",
    description: "Delivery-focused kitchens"
  },
  {
    icon: Package,
    title: "Tiffin Services",
    description: "Daily meal delivery services"
  },
  {
    icon: Cake,
    title: "Sweets & Bakeries",
    description: "Desserts and baked goods"
  },
  {
    icon: Star,
    title: "Specialty Foods",
    description: "Regional and unique cuisines"
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover food from every corner of India, from home kitchens to specialty restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                <category.icon className="w-10 h-10 text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}