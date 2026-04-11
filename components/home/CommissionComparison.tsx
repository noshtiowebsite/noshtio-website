import { TrendingDown, TrendingUp } from "lucide-react";

export default function CommissionComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Keep More of What You Earn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional platforms take 25-30% commission. We take 0%.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Platforms */}
          <div className="bg-white rounded-lg p-8 text-center border-2 border-red-200">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-red-600 mb-4">
              25-30%
            </h3>
            <h4 className="text-xl font-display font-semibold text-gray-800 mb-4">
              Traditional Platforms
            </h4>
            <p className="text-gray-600 mb-6">
              High commissions eat into your profits. Marketing fees, delivery charges, and platform cuts leave you with less.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm text-red-700 font-medium">What you keep: 70-75%</div>
              <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>

          {/* noshtio */}
          <div className="bg-white rounded-lg p-8 text-center border-2 border-gold">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-navy" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              0%
            </h3>
            <h4 className="text-xl font-display font-semibold text-navy mb-4">
              noshtio
            </h4>
            <p className="text-gray-600 mb-6">
              Zero commission means you keep 100% of your earnings. Focus on cooking, we'll handle the rest.
            </p>
            <div className="bg-gold/10 rounded-lg p-4">
              <div className="text-sm text-navy font-medium">What you keep: 100%</div>
              <div className="w-full bg-gold/20 rounded-full h-2 mt-2">
                <div className="bg-gold h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-display font-bold text-navy">
            Save <span className="text-gold">₹25,000-₹30,000</span> per month on average
          </p>
        </div>
      </div>
    </section>
  );
}