import React from 'react';
import Head from 'next/head';
import Container from '../src/components/container';
import ContactUs from '../src/components/Contact/contact-us';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Contact - Bright Side Codes</title>
      </Head>

      <Container>
        <ContactUs />
      </Container>
    </div>
  );
}
