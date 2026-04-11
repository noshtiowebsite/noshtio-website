import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';

const categories = ['All', 'Food Business', 'Vendor Stories', 'Platform Updates', 'Hyperlocal'] as const;

type Category = (typeof categories)[number];

export const metadata: Metadata = {
  title: 'noshtio Blog | Food Business Tips, Stories & Insights',
  description: 'Discover expert tips, success stories, and industry insights for food entrepreneurs. Learn about starting home kitchens, FSSAI compliance, and zero-commission food delivery.',
  keywords: 'food business blog, home kitchen tips, FSSAI license, food delivery India, restaurant business, food entrepreneurship',
  openGraph: {
    title: 'noshtio Blog | Food Business Tips & Insights',
    description: 'Expert guidance for food entrepreneurs in India. From home kitchens to restaurant scaling.',
    type: 'website',
  },
};

const categoryColors = {
  'Food Business': 'bg-blue-100 text-blue-800',
  'Vendor Stories': 'bg-green-100 text-green-800',
  'Platform Updates': 'bg-purple-100 text-purple-800',
  'Hyperlocal': 'bg-orange-100 text-orange-800',
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();

  const selectedCategory: Category = 'All';

  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  const featuredPostsInCategory =
    selectedCategory === 'All'
      ? featuredPosts
      : featuredPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = featuredPostsInCategory[0];
  const regularPosts = filteredPosts.filter(
    (post) => post.slug !== featuredPost?.slug,
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-navy to-navy/95 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            noshtio Blog
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Tips, stories and insights for food entrepreneurs
          </p>
        </div>

        {/* Category Filter - Client Component */}
        <Suspense fallback={<div className="mb-8" /> }>
          <BlogCategoryFilter currentCategory={selectedCategory} />
        </Suspense>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="mb-6 font-display text-2xl font-bold text-gold">
              Featured Article
            </h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden border-0 bg-white shadow-2xl transition-all hover:shadow-3xl hover:scale-[1.02]">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="h-64 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <div className="mb-4 flex items-center gap-4">
                      <Badge className={categoryColors[featuredPost.category]}>
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date.toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-bold text-navy">
                      {featuredPost.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author.name}</span>
                        <span className="text-gray-300">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                      <div className="flex items-center gap-1 text-electricBlue font-semibold">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        <div className="mb-12">
          <h2 className="mb-6 font-display text-2xl font-bold text-white">
            Latest Articles
          </h2>
          {filteredPosts.length === 0 ? (
            <p className="text-white/70">No articles found in this category yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden border-0 bg-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge className={categoryColors[post.category]}>
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold text-navy line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      {post.date.toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </Card>
              </Link>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
          <h3 className="mb-2 font-display text-xl font-bold text-white">
            Stay Updated
          </h3>
          <p className="mb-6 text-white/80">
            Get the latest food business tips and industry insights delivered to your inbox.
          </p>
          <div className="mx-auto max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              <button className="rounded-lg bg-gold px-6 py-2 font-semibold text-navy transition-all hover:bg-gold/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

