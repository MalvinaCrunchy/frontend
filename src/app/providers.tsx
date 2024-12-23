'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ScrollProvider } from '@/components/helpers/StickyContext';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fff',
      },
    },
  },
  colors: {
    primary: {
      100: '#1ECC97',
      75: '#57D9B1',
      60: '#7BE0C4',
      50: '#8EE5CB',
      25: '#C7F2E5',
      10: '#E8F9F4',
    },
    black: {
      100: '#1F2724',
      75: '#575D5B',
      50: '#8F9391',
      25: '#C7C9C8',
      10: '#E8E9E9',
      5: '#F4F4F4',
    },
    lightWarning: {
      100: '#E78225',
      75: '#EDAA83',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ScrollProvider>{children}</ScrollProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
