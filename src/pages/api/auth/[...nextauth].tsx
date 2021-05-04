import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      // clientId: process.env.GOOGLE_ID_PRODUCTION,
      // clientSecret: process.env.GOOGLE_SECRET_PRODUCTION,
      clientId: '107644619120-j70h9tmt36j6oo6hm4h4gscj13i854ds.apps.googleusercontent.com',
      clientSecret: '2mtbkmDPuShEO-VLeQ7Qg3mf'
    }),
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

