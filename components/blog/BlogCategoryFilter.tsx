'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const categories = ['All', 'Food Business', 'Vendor Stories', 'Platform Updates', 'Hyperlocal'] as const;

type Category = (typeof categories)[number];

interface BlogCategoryFilterProps {
  currentCategory: Category;
}

export default function BlogCategoryFilter({ currentCategory }: BlogCategoryFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = useMemo(
    () => categories.includes(currentCategory) ? currentCategory : 'All',
    [currentCategory],
  );

  const handleSelect = (category: Category) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const query = params.toString();
    router.push(`/blog${query ? `?${query}` : ''}`);
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => handleSelect(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${isActive ? 'border-gold bg-gold text-navy' : 'border-white/20 bg-white/10 text-white hover:border-gold hover:bg-gold/20 hover:text-white'}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
