import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { filter, asImageSrc, asText } from '@prismicio/client';

import { PostDocumentWithAuthor } from '../../src/lib/types';
import { createClient } from '../../src/lib/prismic';

import SingleBlogPost from '../../src/components/Blog/SingleBlogPost';
import MoreStories from '../../src/components/Blog/more-stories';
import SectionSeparator from '../../src/components/section-separator';

type PostProps = {
  post: PostDocumentWithAuthor;
  morePosts: PostDocumentWithAuthor[];
};

export default function Post({ post, morePosts }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <h1 className="mt-10 text-xl text-center font-bold text-bsc-light-400 dark:text-bsc-dark-100">
        Fetching this page, don&apos;t sweat it!
      </h1>
    );
  }
  // to prevent passing many nodes, we define title in a const and pass only to const
  const metaTitle = `${asText(post.data.title)} | BSC`;
  const description = `${
    post.data.excerpt as string
  } | Read the latest news from brightsidecodes`;

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:image" content={asImageSrc(post.data.cover_image)} />
        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="metaTitle" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={asImageSrc(post.data.cover_image)} />

        <meta property="og:title" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={asImageSrc(post.data.cover_image)} />
        <meta property="og:url" content={asImageSrc(post.data.cover_image)} />
      </Head>
      <article className="px-4 py-28 w-full md:w-[90%] mx-auto">
        <SingleBlogPost post={post} />
        <SectionSeparator />
        <h1 className="mb-14 text-xl font-bold text-bsc-light-400 dark:text-bsc-dark-100">
          Related Posts
        </h1>
        {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </article>
    </div>
  );
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<PostProps>> {
  const client = createClient({ previewData });

  const [post, morePosts] = await Promise.all([
    client.getByUID<PostDocumentWithAuthor>('post', params.slug, {
      fetchLinks: ['author.name', 'author.picture'],
    }),
    client.getAllByType<PostDocumentWithAuthor>('post', {
      fetchLinks: ['author.name', 'author.picture'],
      orderings: [{ field: 'my.post.date', direction: 'desc' }],
      predicates: [filter.not('my.post.uid', params.slug)],
      limit: 3,
    }),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post, morePosts },
    revalidate: 1,
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
