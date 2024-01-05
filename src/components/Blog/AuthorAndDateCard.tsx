import Link from 'next/link';
import { ImageField, DateField } from '@prismicio/client';
import { Avatar } from '@chakra-ui/react';

import Date from '../date';

interface AuthorDataProps {
  authorImg: ImageField;
  authorName: string;
  date: DateField;
}

function AuthorAndDateCard({ authorImg, authorName, date }: AuthorDataProps) {
  return (
    <div className="mt-5 flex flex-row items-center ">
      <Avatar size="md" src={authorImg.url} name={authorName} />
      <span className="ml-3 flex flex-row space-x-24 text-para-mobile dark:text-darkPri">
        <Link href="#/author" className="underline lg:no-underline">
          {' '}
          <p>{authorName}</p>
        </Link>
        <p>
          <Date dateField={date} />
        </p>
      </span>
    </div>
  );
}

export default AuthorAndDateCard;
