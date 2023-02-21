import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';
import { useAuth } from '@/auth';
import { Input, Button, Box, Center, Heading, Text } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Login() {
  const { data: session, status } = useSession();
  const { login } = useAuth();
  const router = useRouter();


  const onSuccess = (data: LoginArgs) => {
    const { email, password } = data;

    const payload: LoginArgs = {
      email,
      password,
    };

    console.log('payload', payload)

    login(payload)
      .then((res) => {
        console.log('res', res);
        router.push('/dashboard');
      })
      .catch((error) => {
        console.log(`::: 🚫/mutation/login :::`, error);
      });
  };

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useLoginForm(onSuccess);

  return (
    <Center>
      <Box display='inline-block'>
        <Box w='375px'>
          <Box pb='5'>
            <Heading as='h1'>Collars</Heading>
            <Heading as='h4' fontSize='lg'>
              Pet adoption simplified
            </Heading>
          </Box>

          <Box>
            <form onSubmit={onSubmit}>
              <Input
                {...register('email')}
                type='text'
                placeholder='email'
                aria-label='login'
                p='2.5'
                my='2'
              />

              <Input
                {...register('password')}
                type='text'
                placeholder='password'
                aria-label='password'
                p='2.5'
                my='2'
              />

              <Button type='submit' w='100%' my='4'>
                Log in with Email
              </Button>
            </form>

            <Text fontSize='sm' textAlign='center'>
              Need to register?{' '}
              <Link href='/sign-up'>
                <Text as='span' opacity='.55'>
                  Sign up here.
                </Text>
              </Link>
            </Text>
          </Box>
        </Box>

        <Box textAlign='center' w='375px' mt='10' opacity='.75'>
          - OR -
        </Box>

        <Box w='375px'>
          <Button onClick={() => signIn()} w='100%' my='4'>
            Sign in with Provider
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
