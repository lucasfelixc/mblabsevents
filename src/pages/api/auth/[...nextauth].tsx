require('dotenv/config');

import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID_CLIENT_PRODUCTION,
      clientSecret: process.env.GOOGLE_ID_SECRET_PRODUCTION,
    }),
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

