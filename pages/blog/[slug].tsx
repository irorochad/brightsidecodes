import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
// import { useRouter } from 'next/router';
import { filter, asImageSrc, asText } from '@prismicio/client';

import { PostDocumentWithAuthor } from '../../lib/types';
import { createClient } from '../../lib/prismic';

import SingleBlogPost from '../../components/Blog/SingleBlogPost';
import MoreStories from '../../components/Blog/more-stories';
import SectionSeparator from '../../components/section-separator';

type PostProps = {
  post: PostDocumentWithAuthor;
  morePosts: PostDocumentWithAuthor[];
};

export default function Post({ post, morePosts }: PostProps) {
  // const router = useRouter();

  return (
    <div>
      <Head>
        <title>{asText(post.data.title)} | Blog - BrightSideCodes</title>
        <meta
          property="og:image"
          content={asImageSrc(post.data.cover_image, {
            width: 1200,
            height: 600,
            fit: 'crop',
          })}
        />
      </Head>
      <article className="px-4 py-28 w-full md:w-[90%] mx-auto">
        <SingleBlogPost post={post} />
        <SectionSeparator />
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
