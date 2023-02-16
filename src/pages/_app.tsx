import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import { LayoutOne } from '@/components';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ChakraProvider theme={theme}>
        <LayoutOne>
          <Component {...pageProps} />
        </LayoutOne>
      </ChakraProvider>
    </>
  );
}
