import React from 'react'
import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import { createClient } from '../../lib/prismic'
import { PostDocumentWithAuthor } from '../../lib/types'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'

type IndexProps = {
  preview: boolean
  allPosts: PostDocumentWithAuthor[]
}

export default function BlogPage({ allPosts }: IndexProps) {
  const [heroPost, ...morePosts] = allPosts

  return (
    <>
      <div>
        <Head>
          <title>Blog Posts - Bright Side Codes</title>
        </Head>

        <Container>
          <div className="text-center mb-10 text-primary dark:text-bsc-dark-100 ">
            <h1 className="text-4xl font-semibold">The Blog</h1>
            <p className="dark:text-darkPri">
              Where Ideas are Shared and Distributed!
            </p>
          </div>
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
    </>
  )
}

export async function getStaticProps({
  preview = false,
  previewData,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData })

  const allPosts = await client.getAllByType('post', {
    fetchLinks: ['author.name', 'author.picture'],
    orderings: [{ field: 'my.post.date', direction: 'desc' }],
  })

  return {
    props: { preview, allPosts },
  }
}
