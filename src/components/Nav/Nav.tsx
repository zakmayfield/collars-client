import {
  Box,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';
import { signOut, useSession } from 'next-auth/react';

export const Nav = () => {
  const links = getLinks();
  const { toggleColorMode } = useColorMode();
  const { data: session, status } = useSession();

  const getUserSession = () => {
    if (session) return session.user;
  }

  let userSession = getUserSession();

  return (
    <Box
      as='nav'
      py='5'
      px='2.5'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <List display='flex' flex='6' alignItems='center'>
        {links.map((link, index) => {
          return (
            <ListItem
              key={link.path}
              fontSize='lg'
              pr='3'
              pl={index === 0 ? '0' : '3'}
            >
              <Link href={link.path}>{link.page}</Link>
            </ListItem>
          );
        })}
      </List>

      {status === 'authenticated' && (
        <Box display='inline-block' flex='2' textAlign='center'>
          Hello, <Text as='span'>{userSession?.name}</Text>
        </Box>
      )}

      <Box display='inline-block' ml='auto' textAlign='center' flex='1'>
        <Button onClick={toggleColorMode}>
          {useColorModeValue(<MdNightlightRound />, <MdWbSunny />)}
        </Button>
      </Box>

      <Button onClick={() => signOut()} flex='1'>
        Sign Out
      </Button>
    </Box>
  );
};

function getLinks() {
  return [
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
}
