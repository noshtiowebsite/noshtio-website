import { Skeleton } from "@/components/ui/skeleton";

export function VendorCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="w-full h-40" />

      {/* Content skeleton */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-4 h-4" />
            ))}
          </div>
          <Skeleton className="h-4 w-8" />
        </div>

        {/* Location skeleton */}
        <div className="flex items-center mb-4">
          <Skeleton className="w-4 h-4 mr-1" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* CTA skeleton */}
        <Skeleton className="w-full h-9 rounded-lg" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg border-0 overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="w-full h-48" />

      {/* Content skeleton */}
      <div className="p-6">
        <div className="mb-3">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>

        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-4/5 mb-4" />

        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>

        <Skeleton className="h-3 w-16 mt-2" />
      </div>
    </div>
  );
}

export function CityCardSkeleton() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="w-6 h-6" />
      </div>

      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-4/5 mb-4" />

      <div className="mb-4">
        <Skeleton className="h-4 w-24 mb-2" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-18 rounded-full" />
        </div>
      </div>

      <Skeleton className="w-full h-9 rounded-lg" />
    </div>
  );
}