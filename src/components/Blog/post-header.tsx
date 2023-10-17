import React from 'react';
import { PrismicText } from '@prismicio/react';
import { DateField, ImageField, TitleField, asText, isFilled } from '@prismicio/client';

import { AuthorContentRelationshipField } from '../../lib/types';

import AuthorAndDateCard from './AuthorAndDateCard';
import CoverImage from './cover-image';

type PostHeaderProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
  author: AuthorContentRelationshipField;
};

export default function PostHeader({ title, coverImage, date, author }: PostHeaderProps) {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={asText(title)} image={coverImage} />
      </div>
      <h1 className="text-blog-single-title font-bold text-bsc-light-400 dark:text-bsc-dark-100 text-left">
        <PrismicText field={title} />
      </h1>
      {isFilled.contentRelationship(author) && (
        <AuthorAndDateCard
          authorImg={author.data.picture}
          authorName={asText(author.data.name)}
          date={date}
        />
      )}
    </div>
  );
}
