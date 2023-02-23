// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiHandler } from 'next';

// export default function logout(req: NextApiRequest, res: any) {
//   res.cookie('access_token', `token=deleted`, {
//     httpOnly: true,
//     maxAge: 0,
//   });

//   return res.status(200).json({
//     success: 'Successfully logged out',
//   });
// }

const routeHandler: NextApiHandler = (req, res) => {
    res.setHeader(
      'access_token',
      'token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    );
    res.send({
        success: 'Logged Out'
    });
};

export default routeHandler
