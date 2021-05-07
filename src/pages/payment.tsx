import { useSession } from 'next-auth/client'
import Router from 'next/router'
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
    Router.push("/")
  }, [session])

  return (
    <>
    </>
  )
}
