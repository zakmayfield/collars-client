import {
  Box,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaArrowDown, FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = () => {
  const { toggleColorMode } = useColorMode();
  const { data: session, status } = useSession();

  const getUserSession = () => {
    if (session) return session.user;
  };

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
        <ListItem fontSize='lg' pr='3'>
          <Link href='/'>Feed</Link>
        </ListItem>
        {session && (
          <ListItem fontSize='lg' pr='3'>
            <Link href='/dashboard'>Dashboard</Link>
          </ListItem>
        )}
        {!session && (
          <ListItem fontSize='lg' pr='3'>
            <Link href='/login'>Log In</Link>
          </ListItem>
        )}
      </List>

      {status === 'authenticated' && (
        <Box display='inline-block' flex='2' textAlign='right'>
          Hello, <Text as='span'>{userSession?.name}</Text>
        </Box>
      )}

      <Box display='inline-block' ml='5' textAlign='right'>
        <Button onClick={toggleColorMode}>
          {useColorModeValue(<MdNightlightRound />, <MdWbSunny />)}
        </Button>
      </Box>

      <Button onClick={() => {
        if (session) {
          window.localStorage.clearItem('token')
          signOut()
        } else {
          signIn()
        }
      }} ml='5'>
        {session ? 'Sign Out' : 'Sign In'}
      </Button>
    </Box>
  );
};

function getLinks() {
  return [
    {
      id: 1,
      path: '/',
      page: 'Home',
    },
    {
      id: 2,
      path: '/dashboard',
      page: 'Dashboard',
    },
    {
      id: 3,
      path: '/login',
      page: 'Login',
    },
    {
      id: 4,
      path: '/sign-up',
      page: 'Sign Up',
    },
  ];
}
