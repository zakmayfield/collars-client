import {
  Box,
  Flex,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';

export const Nav = () => {
  const links = [
    {
      path: '/',
      page: 'Home',
    },
    {
      path: '/dashboard',
      page: 'Dashboard',
    },
    {
      path: '/login',
      page: 'Login',
    },
    {
      path: '/sign-up',
      page: 'Sign Up',
    },
  ];
  const { toggleColorMode } = useColorMode();

  return (
    <Box as='nav' py='2'>
      <List display='flex' alignItems='center'>
        {links.map((link) => {
          return (
            <ListItem key={link.path} px='2' fontSize='lg'>
              <Link href={link.path}>{link.page}</Link>
            </ListItem>
          );
        })}

        <ListItem px='2' ml='auto'>
          <Button onClick={toggleColorMode}>
            {useColorModeValue(<MdNightlightRound />, <MdWbSunny />)}
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
