import { MapPin, Star } from "lucide-react";

interface VendorCardProps {
  name: string;
  foodType: string;
  rating: number;
  isOpen?: boolean;
}

export default function VendorCard({ name, foodType, rating, isOpen = true }: VendorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Food Image Placeholder */}
      <div className="w-full h-40 bg-gradient-to-br from-navy to-electricBlue flex items-center justify-center">
        <div className="text-4xl">🍴</div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display font-semibold text-navy text-lg line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {foodType}
            </p>
          </div>
          {isOpen && (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2">
              Open Now
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-gold text-gold"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-navy">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1 text-gold" />
          <span className="line-clamp-1">Local Area</span>
        </div>

        {/* CTA */}
        <button className="w-full mt-4 bg-navy hover:bg-navy/90 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
}