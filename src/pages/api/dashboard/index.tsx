import Head from 'next/head';
import { Dashboard as DashboardComponent } from '@/components';


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <DashboardComponent />
      </main>
    </>
  );
  
}