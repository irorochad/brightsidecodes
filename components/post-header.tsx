import React from 'react';
import { PrismicText } from '@prismicio/react';
import { DateField, ImageField, TitleField, asText, isFilled } from '@prismicio/client';

import { AuthorContentRelationshipField } from '../lib/types';

import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type PostHeaderProps = {
  title: TitleField;
  coverImage: ImageField;
  date: DateField;
  author: AuthorContentRelationshipField;
};

export default function PostHeader({ title, coverImage, date, author }: PostHeaderProps) {
  return (
    <>
      <PostTitle>
        <PrismicText field={title} />
      </PostTitle>
      <div className="hidden md:block md:mb-12">
        {isFilled.contentRelationship(author) && (
          <Avatar name={asText(author.data.name)} picture={author.data.picture} />
        )}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={asText(title)} image={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {isFilled.contentRelationship(author) && (
            <Avatar name={asText(author.data.name)} picture={author.data.picture} />
          )}
        </div>
        <div className="mb-6 text-lg">
          <Date dateField={date} />
        </div>
      </div>
    </>
  );
}
