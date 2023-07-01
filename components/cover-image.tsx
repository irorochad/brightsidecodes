import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageField, asImageSrc } from '@prismicio/client';
import cn from 'classnames';

type CoverImageProps = {
  title: string;
  image: ImageField;
  href?: string;
};

export default function CoverImage({ title, image: imageField, href }: CoverImageProps) {
  const image = (
    <Image
      src={asImageSrc(imageField)}
      alt={title}
      width={1000}
      height={1000}
      // imgixParams={{ fit: 'crop', ar: '2:1' }}
      loading="lazy"
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': href,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
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
