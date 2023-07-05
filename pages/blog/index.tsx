import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Container from '../../components/container';
import MoreStories from '../../components/Blog/more-stories';
import { createClient } from '../../lib/prismic';
import { PostDocumentWithAuthor } from '../../lib/types';

type IndexProps = {
  allPosts: PostDocumentWithAuthor[];
};

export default function BlogPage({ allPosts }: IndexProps) {
  // const [heroPost, ...morePosts] = allPosts;
  return (
    <div>
      <Head>
        <title>Blog Posts - Bright Side Codes</title>
      </Head>

      <Container>
        <div className="text-center mb-10 text-primary dark:text-bsc-dark-100 ">
          <h1 className="text-4xl font-semibold">The Blog</h1>
          <p className="dark:text-darkPri">Where Ideas are Written and Distributed!</p>
        </div>
        <MoreStories posts={allPosts} />
      </Container>
    </div>
  );
}

export async function getStaticProps({
  previewData,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData });

  const allPosts = await client.getAllByType('post', {
    fetchLinks: ['author.name', 'author.picture'],
    orderings: [{ field: 'my.post.date', direction: 'desc' }],
  });

  return {
    props: { allPosts },
  };
}
