'use client';

import { Check } from 'lucide-react';

interface StepProgressBarProps {
  currentStep: number;
  steps: string[];
}

export default function StepProgressBar({ currentStep, steps }: StepProgressBarProps) {
  return (
    <div className="mb-12 flex items-center justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex flex-1 items-center">
            {/* Step Circle */}
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-navy text-gold ring-2 ring-gold ring-offset-2 ring-offset-white'
                  : isCompleted
                    ? 'bg-gold text-navy'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isCompleted ? (
                <Check className="h-5 w-5" strokeWidth={3} />
              ) : (
                stepNumber
              )}
            </div>

            {/* Step Label */}
            <span
              className={`ml-3 text-sm font-medium ${
                isActive || isCompleted ? 'text-navy' : 'text-gray-500'
              }`}
            >
              {step}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`mx-4 flex-1 h-1 rounded-full transition-all ${
                  isCompleted ? 'bg-gold' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
