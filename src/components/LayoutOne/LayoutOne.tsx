import { PropsWithChildren } from 'react';
import { Nav } from '../Nav';


export const LayoutOne = ({ children }: PropsWithChildren) => {
  return (
    <>
        <Nav />
        {children}
    </>
  );
};
