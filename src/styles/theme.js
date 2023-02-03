import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#40609E',
    secondary: '#C9E5FF',
    brand: {
      50: '#40609E',
      100: '#40609E',
      500: '#40609E',
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
  },
});

export default theme;
