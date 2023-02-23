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
import { FaArrowDown, FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';

export const Nav = () => {
  const router = useRouter();

  const { toggleColorMode } = useColorMode();

  // this nav is only for development, i think the layout of my app will be sort of a portal vibe, no navigatable nav bar but each page is interactive with its own sort of navigation

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
        <ListItem fontSize='lg' pr='3'>
          <Link href='/dashboard'>Dashboard</Link>
        </ListItem>
        <ListItem fontSize='lg' pr='3'>
          <Link href='/login'>Log In</Link>
        </ListItem>
        <ListItem>
          <Button
            onClick={() => {
              window.localStorage.removeItem('token');
              router.push('/');
            }}
          >
            Log Out
          </Button>
        </ListItem>
        <ListItem>
          <Link href='/api/auth/logout'>Auth Log out</Link>
        </ListItem>
      </List>
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
