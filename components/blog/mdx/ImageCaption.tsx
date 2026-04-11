interface ImageCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageCaption({ src, alt, caption }: ImageCaptionProps) {
  return (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-lg"
      />
      <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
        {caption}
      </figcaption>
    </figure>
  );
}
