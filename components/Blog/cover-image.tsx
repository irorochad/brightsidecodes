import React from 'react';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/client';
import cn from 'classnames';

type CoverImageProps = {
  title: string;
  image: ImageField;
  href?: string;
};

export default function CoverImage({ title, image: imageField, href }: CoverImageProps) {
  const image = (
    <PrismicNextImage
      field={imageField}
      alt=""
      width={1000}
      height={1000}
      imgixParams={{ fit: 'crop', ar: '2:1' }}
      loading="lazy"
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': href,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {/* if the image has a link passed to it, display image with link, else just the image */}
      {href ? (
        <Link href={href} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
