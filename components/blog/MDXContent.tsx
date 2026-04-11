import { MDXRemote } from 'next-mdx-remote';
import Callout from '@/components/blog/mdx/Callout';
import VendorCTA from '@/components/blog/mdx/VendorCTA';
import ComparisonTable from '@/components/blog/mdx/ComparisonTable';
import ImageCaption from '@/components/blog/mdx/ImageCaption';

const mdxComponents = {
  Callout,
  VendorCTA,
  ComparisonTable,
  ImageCaption,
};

interface MDXContentProps {
  source: any;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:text-gray-700 prose-a:text-electricBlue prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
}