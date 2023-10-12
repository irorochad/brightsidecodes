import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import ContactUs from '../components/Contact/contact-us';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About - Bright Side Codes</title>
      </Head>

      <Container>
        <ContactUs />
      </Container>
    </div>
  );
}
