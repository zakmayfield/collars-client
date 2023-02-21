import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { components } from './components';
import { foundations } from './foundations';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const baseTheme = {
  config,
  components,
  ...foundations
};

export const theme = extendTheme({ ...baseTheme });
