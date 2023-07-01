import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import { CMS_NAME } from '../lib/constants';
import { createClient } from '../lib/prismic';
import { PostDocumentWithAuthor } from '../lib/types';

type IndexProps = {
  allPosts: PostDocumentWithAuthor[];
};

export default function Index({ allPosts }: IndexProps) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <div>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>

      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.data.title}
            href={heroPost.url}
            coverImage={heroPost.data.cover_image}
            date={heroPost.data.date}
            author={heroPost.data.author}
            excerpt={heroPost.data.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
