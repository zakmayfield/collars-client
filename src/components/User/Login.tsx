import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';
import { useAuth } from '@/auth';
import { Input, Button, Box, Flex, Center, Heading } from '@chakra-ui/react';
import { getProviders, signIn } from 'next-auth/react';

export function Login() {
  const { login } = useAuth();

  const router = useRouter();

  const onSuccess = (data: LoginArgs) => {
    const { email, password } = data;

    const payload: LoginArgs = {
      email,
      password,
    };

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
                Login
              </Button>

              {/* {error && error.message && <div>{error.message}</div>}
      {data && data?.login?.user?.name && <div>✅ Hello, {name}</div>} */}
            </form>
          </Box>
        </Box>

        <Box textAlign='center' w='375px'>
          - OR -
        </Box>

        {/* {providers.map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))} */}

        <Box w='375px'>
          <Button onClick={() => signIn()} w='100%' my='4'>
            Sign in with Provider
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
