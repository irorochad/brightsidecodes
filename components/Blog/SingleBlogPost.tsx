import React from 'react';

import { PostDocumentWithAuthor } from '../../lib/types';

import PostBody from '../post-body';
import PostHeader from './post-header';

type PostProps = {
  post: PostDocumentWithAuthor;
};

function SingleBlogPage({ post }: PostProps) {
  return (
    <div className="w-full xl:w-11/12 lg:col-span-2 text-left para-md text-blog-text-light dark:text-blog-text-dark space-y-7">
      <PostHeader
        title={post.data.title}
        coverImage={post.data.cover_image}
        date={post.data.date}
        author={post.data.author}
      />
      <PostBody slices={post.data.slices} />
    </div>
  );
}
export default SingleBlogPage;
