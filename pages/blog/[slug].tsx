import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { filter, asImageSrc, asText } from '@prismicio/client';

import { CMS_NAME } from '../../lib/constants';
import { PostDocumentWithAuthor } from '../../lib/types';
import { createClient } from '../../lib/prismic';

import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import SectionSeparator from '../../components/section-separator';

type PostProps = {
  post: PostDocumentWithAuthor;
  morePosts: PostDocumentWithAuthor[];
};

export default function Post({ post, morePosts }: PostProps) {
  const router = useRouter();

  return (
    <div>
      <Container>
        {router.isFallback ? (
          <PostTitle>Fetching...</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {asText(post.data.title)} | Next.js Blog Page Example with{' '}
                  {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={asImageSrc(post.data.cover_image, {
                    width: 1200,
                    height: 600,
                    fit: 'crop',
                  })}
                />
              </Head>
              <PostHeader
                title={post.data.title}
                coverImage={post.data.cover_image}
                date={post.data.date}
                author={post.data.author}
              />
              <PostBody slices={post.data.slices} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<PostProps>
> {
  const client = createClient({ previewData });

  const [post, morePosts] = await Promise.all([
    client.getByUID<PostDocumentWithAuthor>('post', params.slug, {
      fetchLinks: ['author.name', 'author.picture'],
    }),
    client.getAllByType<PostDocumentWithAuthor>('post', {
      fetchLinks: ['author.name', 'author.picture'],
      orderings: [{ field: 'my.post.date', direction: 'desc' }],
      predicates: [filter.not('my.post.uid', params.slug)],
      limit: 2,
    }),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post, morePosts },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const allPosts = await client.getAllByType('post');

  return {
    paths: allPosts.map((post) => post.url),
    fallback: true,
  };
}
