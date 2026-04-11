'use client';

import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';

const loaders: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  'how-to-start-home-kitchen-business-india': () => import('@/content/blog/how-to-start-home-kitchen-business-india.mdx'),
  'zero-commission-food-delivery-india': () => import('@/content/blog/zero-commission-food-delivery-india.mdx'),
  'fssai-license-home-kitchen-guide': () => import('@/content/blog/fssai-license-home-kitchen-guide.mdx'),
};

interface BlogPostContentProps {
  slug: string;
  components: Record<string, ComponentType<any>>;
}

export default function BlogPostContent({ slug, components }: BlogPostContentProps) {
  const [PostContent, setPostContent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    const loader = loaders[slug];
    if (!loader) {
      setPostContent(null);
      return;
    }

    loader().then((mod) => {
      setPostContent(() => mod.default);
    });
  }, [slug]);

  if (!PostContent) {
    return <div className="min-h-[240px] rounded-xl bg-gray-100 p-8 text-sm text-gray-500">Loading article content...</div>;
  }

  return <PostContent components={components} />;
}
