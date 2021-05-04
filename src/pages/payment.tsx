import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

export default function Payment() {
  const [session] = useSession()

  useEffect(() => {
    console.log(session.user)
  }, [])

  return (
    <>
      {session && <h1>Hello {session.user.name}</h1>}
    </>
  )
}
