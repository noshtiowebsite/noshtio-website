import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  MessageCircle,
  Twitter,
  Linkedin,
  ChefHat,
  ArrowRight
} from 'lucide-react';
import Callout from '@/components/blog/mdx/Callout';
import VendorCTA from '@/components/blog/mdx/VendorCTA';
import ComparisonTable from '@/components/blog/mdx/ComparisonTable';
import ImageCaption from '@/components/blog/mdx/ImageCaption';
import BlogPostContent from '@/components/blog/BlogPostContent';

const mdxComponents = {
  Callout,
  VendorCTA,
  ComparisonTable,
  ImageCaption,
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date.toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category, 3);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.date.toISOString(),
            author: {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.role,
            },
            publisher: {
              '@type': 'Organization',
              name: 'noshtio',
              logo: {
                '@type': 'ImageObject',
                url: 'https://noshtio.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://noshtio.com/blog/${post.slug}`,
            },
            articleSection: post.category,
            keywords: post.keywords?.join(', '),
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b bg-gray-50 px-4 py-4">
          <div className="mx-auto max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-navy">
                Blog
              </Link>
              <span>/</span>
              <Link href={`/blog?category=${post.category}`} className="hover:text-navy">
                {post.category}
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="lg:flex lg:gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              {/* Header */}
              <header className="mb-8">
                <div className="mb-4 flex items-center gap-4">
                  <Badge className="bg-navy text-white">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {post.date.toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>

                <h1 className="mb-4 font-display text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>

                <p className="mb-6 text-lg text-gray-600 md:text-xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-b pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-semibold text-navy">{post.author.name}</div>
                        <div className="text-sm text-gray-500">{post.author.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {post.readingTime} min read
                    </div>
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Share:</span>
                    <SocialShareButtons title={post.title} slug={post.slug} />
                  </div>
                </div>
              </header>

              {/* Cover Image */}
              <div className="mb-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* MDX Content */}
              <BlogPostContent slug={slug} components={mdxComponents} />

              {/* Inline CTA */}
              <div className="my-12 rounded-lg bg-gradient-to-r from-navy to-electricBlue p-8 text-center text-white">
                <ChefHat className="mx-auto mb-4 h-12 w-12 text-gold" />
                <h3 className="mb-2 font-display text-2xl font-bold">
                  Ready to Start Your Food Business?
                </h3>
                <p className="mb-6 text-white/90">
                  Join thousands of successful food entrepreneurs on noshtio. Zero commission, unlimited growth.
                </p>
                <Link
                  href="/vendor/register?utm_source=blog"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-gold/90 hover:shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Tags */}
              {post.keywords && post.keywords.length > 0 && (
                <div className="mb-8">
                  <h4 className="mb-3 font-semibold text-navy">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-gray-600">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0 lg:w-1/3 lg:sticky lg:top-24">
              {/* Author Bio */}
              <Card className="mb-8 p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-navy/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="mb-1 font-semibold text-navy">{post.author.name}</h3>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                  <p className="mt-3 text-sm text-gray-700">
                    Expert in food business operations and hyperlocal delivery platforms.
                    Helping entrepreneurs scale their food ventures across India.
                  </p>
                </div>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-8 p-6">
                <h3 className="mb-4 font-semibold text-navy">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-navy">
                    Introduction
                  </a>
                  <a href="#getting-started" className="block text-sm text-gray-600 hover:text-navy">
                    Getting Started
                  </a>
                  <a href="#best-practices" className="block text-sm text-gray-600 hover:text-navy">
                    Best Practices
                  </a>
                  <a href="#conclusion" className="block text-sm text-gray-600 hover:text-navy">
                    Conclusion
                  </a>
                </nav>
              </Card>

              {/* About noshtio */}
              <Card className="mb-8 bg-navy p-6 text-white">
                <h3 className="mb-3 text-lg font-semibold">About noshtio</h3>
                <p className="text-sm text-white/90">
                  noshtio is India’s zero-commission hyperlocal food marketplace for home kitchens, vendors, and restaurants. Keep more revenue while reaching nearby customers.
                </p>
                <Link
                  href="/for-vendors"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
                >
                  Learn more
                </Link>
              </Card>

              <VendorCTA />

              {/* Related Posts */}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold text-navy">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="h-16 w-16 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-navy group-hover:text-electricBlue line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {relatedPost.readingTime} min read
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </aside>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="border-t bg-gray-50 px-4 py-8">
          <div className="mx-auto max-w-7xl text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-navy hover:text-electricBlue"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

// Social Share Component
function SocialShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://noshtio.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  return (
    <div className="flex gap-1">
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors hover:bg-green-200"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-400 transition-colors hover:bg-blue-200"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>
    </div>
  );
}
