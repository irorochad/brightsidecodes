import React from 'react';
import Link from 'next/link';
import { DateField, ImageField, TitleField, asText, isFilled } from '@prismicio/client';
import { TruncateText } from '../../helpers/truncateText';
import { AuthorContentRelationshipField } from '../../lib/types';
import CoverImage from './cover-image';
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
      <CoverImage title={asText(title)} href={href} image={coverImage} />
      <div className="bg-white dark:bg-black py-5 px-3 rounded-b-xl">
        <span className="mt-1 flex flex-row text-darkPri font-bold">category</span>
        <h1 className="mt-1 text-blog-title font-bold text-bsc-light-400 hover:text-secondary dark:text-bsc-dark-100">
          <Link href={href}>
            {TruncateText({ text: asText(title), limit: 10 })}
            {/* {asText(title)} */}
          </Link>
        </h1>
        <Link href={href}>
          <p className="mt-1 text-blog-text-light dark:text-blog-text-dark">
            {TruncateText({ text: excerpt, limit: 20 })}
          </p>
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
