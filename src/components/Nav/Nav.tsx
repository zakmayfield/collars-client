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

export const Nav = () => {
  const { toggleColorMode } = useColorMode();

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
