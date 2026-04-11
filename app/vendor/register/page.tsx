'use client';

import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StepProgressBar from '@/components/forms/StepProgressBar';
import { toast } from 'sonner';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ChefHat, ArrowRight, MapPin } from 'lucide-react';

// Validation schema - all fields in one
const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Invalid email').or(z.literal('')).optional(),
  businessName: z.string().min(2, 'Business name is required'),
  city: z.string().min(1, 'Please select your city'),
  businessType: z.string().min(1, 'Please select business type'),
  monthlyRevenue: z.string().min(1, 'Please select monthly revenue range'),
  hasFSSAI: z.string().refine(
    (val) => ['yes', 'no', 'applying'].includes(val),
    'Please select FSSAI status'
  ),
  description: z.string().max(300, 'Description must be less than 300 characters').optional(),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Terms of Service',
  }),
  whatsappConsent: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const cities = [
  'Delhi',
  'Mumbai',
  'Lucknow',
  'Jaipur',
  'Kanpur',
  'Agra',
  'Varanasi',
  'Noida',
  'Gurgaon',
  'Pune',
  'Hyderabad',
  'Bengaluru',
  'Ahmedabad',
  'Indore',
  'Bhopal',
  'Other',
];

const businessTypes = [
  'Home Kitchen',
  'Restaurant',
  'Cloud Kitchen',
  'Tiffin Service',
  'Sweet Shop',
  'Bakery',
  'Specialty Foods',
  'Other',
];

const revenueRanges = [
  'Under Rs.10K',
  'Rs.10K-50K',
  'Rs.50K-2L',
  'Above Rs.2L',
  'Not started yet',
];

export default function VendorRegister() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy" />}>
      <VendorRegisterForm />
    </Suspense>
  );
}

function VendorRegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const description = watch('description', '');
  const formData = watch();

  const handleNext = async () => {
    // Define fields to validate based on current step
    const fieldsToValidate: (keyof FormData)[] =
      currentStep === 1
        ? ['fullName', 'mobile', 'email']
        : currentStep === 2
          ? ['businessName', 'city', 'businessType', 'monthlyRevenue', 'hasFSSAI', 'description']
          : ['termsAgreed'];

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) return;

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitForm = async (data: FormData) => {
    if (currentStep !== 3) {
      handleNext();
      return;
    }

    setIsSubmitting(true);

    try {
      const utmSource = searchParams.get('utm_source') || undefined;

      const vendorData = {
        fullName: data.fullName,
        mobile: data.mobile,
        email: data.email || null,
        businessName: data.businessName,
        city: data.city,
        businessType: data.businessType,
        monthlyRevenue: data.monthlyRevenue,
        hasFSSAI: data.hasFSSAI,
        description: data.description,
        termsAgreed: data.termsAgreed,
        whatsappConsent: data.whatsappConsent || false,
        status: 'new',
        source: 'website_register',
        utmSource: utmSource,
        createdAt: serverTimestamp(),
      };

      const vendorLeadsRef = collection(db, 'vendor_leads');
      await addDoc(vendorLeadsRef, vendorData);

      const firstName = data.fullName?.split(' ')[0] || 'there';
      router.push(`/vendor/welcome?name=${encodeURIComponent(firstName)}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please WhatsApp us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-navy to-navy/95 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <ChefHat className="h-8 w-8 text-gold" />
            <h1 className="font-display text-3xl font-bold text-white">
              Join noshtio
            </h1>
          </div>
          <p className="text-white/60">
            Earn more with zero commission. Sell your food directly to customers.
          </p>
        </div>

        {/* Progress Bar */}
        <StepProgressBar
          currentStep={currentStep}
          steps={['About You', 'Your Business', 'Review']}
        />

        {/* Form Card */}
        <Card className="border-0 bg-white p-8 shadow-2xl">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* STEP 1 - Tell us about yourself */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="font-display text-2xl font-bold text-navy">
                  Tell us about yourself
                </h2>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('mobile')}
                    type="tel"
                    placeholder="9876543210"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-navy">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com (optional)"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2 - Your Food Business */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="font-display text-2xl font-bold text-navy">
                  Your Food Business
                </h2>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('businessName')}
                    type="text"
                    placeholder="e.g., Ravi's Kitchen"
                    defaultValue={formData.businessName}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-500">{errors.businessName.message}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('city')}
                    defaultValue={formData.city}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('businessType')}
                    defaultValue={formData.businessType}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="mt-1 text-sm text-red-500">{errors.businessType.message}</p>
                  )}
                </div>

                {/* Monthly Revenue */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Monthly Revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('monthlyRevenue')}
                    defaultValue={formData.monthlyRevenue}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  >
                    <option value="">Select revenue range</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.monthlyRevenue && (
                    <p className="mt-1 text-sm text-red-500">{errors.monthlyRevenue.message}</p>
                  )}
                </div>

                {/* FSSAI Status */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    FSSAI License <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-3 space-y-2">
                    {['yes', 'no', 'applying'].map((status) => (
                      <label key={status} className="flex items-center gap-3">
                        <input
                          {...register('hasFSSAI')}
                          type="radio"
                          value={status}
                          defaultChecked={formData.hasFSSAI === status}
                          className="h-4 w-4 border-gray-300 text-electricBlue focus:ring-electricBlue"
                        />
                        <span className="text-sm text-navy">
                          {status === 'yes'
                            ? 'Yes, I have FSSAI'
                            : status === 'no'
                              ? "No, I don't have it yet"
                              : 'I am applying'}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.hasFSSAI && (
                    <p className="mt-2 text-sm text-red-500">{errors.hasFSSAI.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Tell us about your food specialties
                  </label>
                  <textarea
                    {...register('description')}
                    defaultValue={formData.description}
                    placeholder="What cuisines or dishes do you specialize in? (e.g., North Indian curries, homemade parathas, traditional sweets)"
                    maxLength={300}
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-navy focus:border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue/20"
                  />
                  <div className="mt-2 flex text-xs text-gray-500">
                    {description?.length || 0}/300 characters
                  </div>
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3 - Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="font-display text-2xl font-bold text-navy">Review & Submit</h2>

                {/* Summary Card */}
                <div className="space-y-4 rounded-lg bg-navy/5 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Full Name</p>
                      <p className="mt-1 font-medium text-navy">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Mobile</p>
                      <p className="mt-1 font-medium text-navy">{formData.mobile}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Email</p>
                      <p className="mt-1 font-medium text-navy">{formData.email || '—'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">City</p>
                      <p className="mt-1 font-medium text-navy">{formData.city}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Business</p>
                      <p className="mt-1 font-medium text-navy">{formData.businessName}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Type</p>
                      <p className="mt-1 font-medium text-navy">{formData.businessType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">Revenue</p>
                      <p className="mt-1 font-medium text-navy">{formData.monthlyRevenue}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-navy/60">FSSAI</p>
                      <p className="mt-1 font-medium text-navy capitalize">
                        {formData.hasFSSAI === 'yes'
                          ? 'Yes'
                          : formData.hasFSSAI === 'no'
                            ? 'No'
                            : 'Applying'}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase text-navy/60">About Your Food</p>
                    <p className="mt-2 text-sm text-navy">{formData.description}</p>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="space-y-3">
                  <label className="flex gap-3">
                    <input
                      {...register('termsAgreed')}
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-electricBlue focus:ring-electricBlue"
                    />
                    <span className="text-sm text-navy">
                      I agree to noshtio{' '}
                      <Link
                        href="/terms-of-service"
                        target="_blank"
                        className="font-semibold text-electricBlue hover:underline"
                      >
                        Terms of Service
                      </Link>
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.termsAgreed && (
                    <p className="text-sm text-red-500">{errors.termsAgreed.message}</p>
                  )}

                  {/* WhatsApp Consent (Optional) */}
                  <label className="flex gap-3">
                    <input
                      {...register('whatsappConsent')}
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-electricBlue focus:ring-electricBlue"
                    />
                    <span className="text-sm text-navy">
                      I consent to WhatsApp onboarding support (optional)
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex gap-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy transition-all hover:bg-navy/5"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                  currentStep < 3
                    ? 'bg-electricBlue text-white hover:bg-electricBlue/90'
                    : 'bg-gold text-navy hover:bg-gold/90'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Submitting...
                  </>
                ) : currentStep < 3 ? (
                  <>
                    Next <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  'Submit & Join noshtio'
                )}
              </button>
            </div>
          </form>
        </Card>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-white/40">
          Your information is kept secure and will only be used for your vendor onboarding.
        </p>
      </div>
    </main>
  );
}
