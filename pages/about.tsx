import React from 'react';
import Head from 'next/head';
import Container from '../src/components/container';
import AboutUsPage from '../src/components/About/about-us';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About - Bright Side Codes</title>
      </Head>

      <Container>
        <AboutUsPage />
      </Container>
    </div>
  );
}
