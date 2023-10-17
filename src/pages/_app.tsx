import React from 'react';
import '../../styles/index.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { PrismicPreview } from '@prismicio/next';
import Layout from '../components/layout';
import { repositoryName } from '../lib/prismic';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <ChakraProvider>
        <PrismicPreview repositoryName={repositoryName}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </ChakraProvider>
    </ThemeProvider>
  );
}
