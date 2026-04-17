"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const platforms = {
  other: { name: "Other Apps", rate: 0.25 }
} as const;

type PlatformKey = keyof typeof platforms;

export default function SavingsCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState([100000]);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>("other");
  const [calculations, setCalculations] = useState({
    monthlyLoss: 0,
    annualLoss: 0,
    noshtioSavings: 0
  });

  useEffect(() => {
    const revenue = monthlyRevenue[0];
    const commissionRate = platforms[selectedPlatform].rate;
    const monthlyLoss = revenue * commissionRate;
    const annualLoss = monthlyLoss * 12;
    const noshtioSavings = monthlyLoss; // Since noshtio is 0%

    setCalculations({
      monthlyLoss,
      annualLoss,
      noshtioSavings
    });
  }, [monthlyRevenue, selectedPlatform]);

  const formatIndianNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you could save by switching to noshtio's zero commission model
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Revenue Input */}
            <div className="mb-8">
              <label className="block text-lg font-display font-semibold text-navy mb-4">
                Monthly Revenue: ₹{formatIndianNumber(monthlyRevenue[0])}
              </label>
              <Slider
                value={monthlyRevenue}
                onValueChange={setMonthlyRevenue}
                max={500000}
                min={10000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹10,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Platform Selection */}
            <div className="mb-8">
              <label className="block text-lg font-display font-semibold text-navy mb-4">
                Current Platform
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(Object.entries(platforms) as [PlatformKey, typeof platforms[PlatformKey]][]).map(([key, platform]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlatform(key)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedPlatform === key
                        ? 'border-gold bg-gold/10 text-navy'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gold/50'
                    }`}
                  >
                    <div className="font-display font-semibold">
                      {platform.name}
                    </div>
                    <div className="text-sm opacity-75">
                      {platform.rate * 100}% commission
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-display font-bold text-red-600 mb-2">
                  ₹{formatIndianNumber(calculations.monthlyLoss)}
                </div>
                <div className="text-sm text-red-700 font-medium">
                  Monthly Loss
                </div>
                <div className="text-xs text-red-600 mt-1">
                  ({platforms[selectedPlatform].rate * 100}% commission)
                </div>
              </div>

              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-display font-bold text-red-600 mb-2">
                  ₹{formatIndianNumber(calculations.annualLoss)}
                </div>
                <div className="text-sm text-red-700 font-medium">
                  Annual Loss
                </div>
                <div className="text-xs text-red-600 mt-1">
                  Lost opportunity
                </div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-display font-bold text-green-600 mb-2">
                  ₹{formatIndianNumber(calculations.noshtioSavings)}
                </div>
                <div className="text-sm text-green-700 font-medium">
                  Monthly Savings
                </div>
                <div className="text-xs text-green-600 mt-1">
                  With noshtio
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gold rounded-lg p-6 mb-6">
                <h3 className="text-xl font-display font-bold text-navy mb-2">
                  Save ₹{formatIndianNumber(calculations.annualLoss)} annually!
                </h3>
                <p className="text-navy/80 mb-4">
                  Join 500+ vendors already saving thousands every month
                </p>
                <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3">
                  Start Saving Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}