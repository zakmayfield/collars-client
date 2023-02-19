import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Nav } from '../Nav';

export const LayoutOne = ({ children }: PropsWithChildren) => {
  return (
    <Box>
        <Nav />
        {children}
    </Box>
  );
};
