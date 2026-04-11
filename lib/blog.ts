import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

// Zod schema for blog post frontmatter
const blogPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string().transform((str) => new Date(str)),
  author: z.object({
    name: z.string(),
    role: z.string(),
  }),
  category: z.enum(['Food Business', 'Vendor Stories', 'Platform Updates', 'Hyperlocal']),
  excerpt: z.string().max(160),
  coverImage: z.string(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  keywords: z.array(z.string()),
  readingTime: z.number().optional(),
  featured: z.boolean().optional(),
});

export type BlogPost = z.infer<typeof blogPostSchema> & {
  content: string;
  wordCount: number;
  readingTime: number;
};

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

// Calculate reading time based on word count (200 words per minute)
function calculateReadingTime(wordCount: number): number {
  return Math.ceil(wordCount / 200);
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  try {
    const files = fs.readdirSync(BLOG_CONTENT_DIR);

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      const filePath = path.join(BLOG_CONTENT_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Validate frontmatter
      const validatedData = blogPostSchema.parse(data);

      // Calculate word count and reading time
      const wordCount = content.trim().split(/\s+/).length;
      const readingTime = validatedData.readingTime || calculateReadingTime(wordCount);

      posts.push({
        ...validatedData,
        content,
        wordCount,
        readingTime,
      });
    }

    // Sort by date (newest first)
    return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Get featured posts
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.category === category);
}

// Get related posts (same category, excluding current post)
export async function getRelatedPosts(currentSlug: string, category: string, limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = Array.from(new Set(posts.map(post => post.category)));
  return categories.sort();
}

// Get all post slugs (for static generation)
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map(post => post.slug);
}
