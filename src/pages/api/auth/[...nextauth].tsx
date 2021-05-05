require('dotenv/config');

import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID_DEV,
      clientSecret: process.env.GOOGLE_SECRET_DEV,
    }),
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

