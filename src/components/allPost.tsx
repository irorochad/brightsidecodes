import { createClient } from '../lib/prismic';
// import { PostDocumentWithAuthor } from '../lib/types';

export async function fetchAllBlogPosts() {
  const client = createClient();

  const allPosts = await client.getAllByType('post', {
    fetchLinks: ['author.name', 'author.picture'],
    orderings: [{ field: 'my.post.date', direction: 'desc' }],
  });

  return allPosts;
}
