/* eslint-disable */

import type { GetServerSidePropsContext } from 'next/types';
import { fetchAllBlogPosts } from '../components/allPost';

// TODO: Change this with your website URL
const WEBSITE_URL = 'https://brightsidecodes.com';

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const allPosts = await fetchAllBlogPosts();
  // console.log(allPosts);

  if (res) {
    res.setHeader('Content-Type', 'text/xml');

    // const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //   <url><loc>${WEBSITE_URL}</loc></url>
    //   ${allPosts
    //     .map(
    //       ({ url, last_publication_date }) => `<url>
    //     <loc>${WEBSITE_URL}${url}</loc>
    //     <lastmod>${last_publication_date}</lastmod>
    //     <priority>1.00</priority>
    //     <changefreq>monthly</changefreq>
    //     </url>`
    //     )
    //     .join('\n')}
    //   </urlset>`;

    // Assuming last_publication_date is a Date object
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${WEBSITE_URL}</loc></url>
    ${allPosts
      .map(({ url, last_publication_date }) => {
        // Format last_publication_date in ISO 8601 with timezone offset
        const lastmod = `${last_publication_date}T00:00:00+00:00`;
        return `<url>
          <loc>${WEBSITE_URL}${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <priority>1.00</priority>
          <changefreq>monthly</changefreq>
        </url>`;
      })
      .join('\n')}
    </urlset>`;

    res.write(sitemap);
    res.end();
  }

  return { props: {} };
}

const Sitemap: React.FC = () => null;
export default Sitemap;
