import React from 'react';
import Head from 'next/head';
import Container from '../components/container';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home - Bright Side Codes</title>
      </Head>

      <Container>
        <div>
          <p>You&apos;re welcome, but we&apos;ll redirect you soon.</p>
        </div>
      </Container>
    </div>
  );
}
