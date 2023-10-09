import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import AboutUsPage from '../components/About/about-us';

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
