import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    blue: {
      100: '#C4C5DA',
      200: '#9697B6',
      300: '#616E9A',
      400: '#032A49',
    },
    mustard: {
      100: '#CB9821',
    }
  },
};

export const theme = extendTheme({ config, colors });
