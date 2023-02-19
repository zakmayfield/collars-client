import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';
import { useAuth } from '@/auth';
import { Input, Button, Box, Flex } from '@chakra-ui/react';

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
        console.log('res', res)
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
    <Box>
      <Box w='375px'>
        <Box>
          <h1>Log In</h1>
          <h2>Info App Incorporated</h2>
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

            <Button type='submit' style={{ width: '100%' }} my='4'>
              Login
            </Button>

            {/* {error && error.message && <div>{error.message}</div>}
      {data && data?.login?.user?.name && <div>✅ Hello, {name}</div>} */}
          </form>
        </Box>
      </Box>
    </Box>
  );
}
