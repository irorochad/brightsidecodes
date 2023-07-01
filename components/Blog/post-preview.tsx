import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DateField,
  ImageField,
  TitleField,
  asImageSrc,
  asText,
  isFilled,
} from '@prismicio/client';

import { AuthorContentRelationshipField } from '../../lib/types';
import AuthorAndDateCard from './AuthorAndDateCard';

type PostPreviewProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
  excerpt: string;
  author: AuthorContentRelationshipField;
  href: string;
};

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  href,
}: PostPreviewProps) {
  return (
    <div className="w-full mx-auto  md:px-4 ">
      <Link href={href}>
        {/* <CoverImage title={asText(title)} href={href} image={coverImage} /> */}
        <Image
          src={asImageSrc(coverImage)}
          alt={asText(title)}
          width={1000}
          height={1000}
          priority
          className="h-auto w-full xl:w-5/6  rounded-xl "
        />
      </Link>
      <div className="bg-white dark:bg-black py-5 px-3 rounded-b-xl">
        <span className="mt-1 flex flex-row text-darkPri font-bold">category</span>
        <h1 className="mt-1 text-blog-title font-bold text-bsc-light-400 hover:text-secondary dark:text-bsc-dark-100">
          <Link href={href}>{asText(title)}</Link>
        </h1>
        <Link href={href}>
          <p className="mt-1 text-blog-text-light dark:text-blog-text-dark">{excerpt}</p>
        </Link>
        {/* show this only if there's an author profile fetched. */}
        {isFilled.contentRelationship(author) && (
          <AuthorAndDateCard
            authorImg={author.data.picture}
            authorName={asText(author.data.name)}
            date={date}
          />
        )}
      </div>
    </div>
  );
}
