import React from 'react';
import type { Content } from '@prismicio/client';

import PostPreview from './post-preview';
import ScrollToTop from '../ScrollToTop';

type MoreStoriesProps = {
  posts: Content.PostDocument[];
};

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <ScrollToTop />
      <div className=" text-gray-600  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-10">
        {posts.map((post) => (
          <PostPreview
            key={post.uid}
            href={post.url}
            title={post.data.title}
            coverImage={post.data.cover_image}
            date={post.data.date}
            author={post.data.author}
            excerpt={post.data.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
