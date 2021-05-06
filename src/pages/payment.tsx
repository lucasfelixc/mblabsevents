import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { api } from 'services/api'

export default function Payment() {
  const [ session ] = useSession()

  async function addUser() {
    await api.post('users/', {
      name: session.user.name,
      email: session.user.email,
      event: []
    })
  }

  useEffect(() => {
    session ? addUser() : console.log(session)
  }, [session])

  return (
    <>
      {!session && <h1>Você não está logado</h1>}
      {session && <h1>Hello {session.user.name}</h1>}
    </>
  )
}
