import { useSession } from 'next-auth/client'

export default function Payment() {
  const [session] = useSession()

  return (
    <>
      {!session && <h1>Você não está logado</h1>}
      {session && <h1>Hello {session.user.name}</h1>}
    </>
  )
}
