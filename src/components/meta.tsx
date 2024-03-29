import React from 'react';
import Head from 'next/head';

export default function Meta() {
  const HOME_OG_IMAGE_URL =
    'https://brightsidecodes.cdn.prismic.io/brightsidecodes/e6537789-4fdf-4c0a-ad2c-910f6888b531_bsc.svg';
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta
        name="description"
        content="BrightSideCodes - Bytes of Wisdom, One Click Away."
      />

      <meta
        name="keywords"
        content="coding, technical writing, reactjs, tutorial, web development, blog"
      />
      <title> Bright Side Codes - Bytes of Wisdom, One Click Away.</title>
    </Head>
  );
}
