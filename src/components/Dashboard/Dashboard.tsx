import { GET_USER } from '@/schema';
import { useQuery } from '@apollo/client';
import { List, ListItem, Box } from '@chakra-ui/react';
import { useSession  } from 'next-auth/react';

export function Dashboard() {
  const { data: session, status } = useSession()

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <div>loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error {error.message}</div>;

  const user = data?.getUser;

  console.log('data ::: dashboard ::: getUser', data);

  return (
    <>
      <h2>{user.name}s Dashboard</h2>

      <h3>Available pets:</h3>

      <List>
        {user.pets.map((pet: any) => {
          return (
            <ListItem key={pet.id}>
              <Box>
                <h3>{pet.name}</h3>
                <h4>{pet.species}</h4>
              </Box>
            </ListItem>
          );
        })}
        <ListItem></ListItem>
      </List>
    </>
  );
}
