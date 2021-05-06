import { signIn, useSession } from 'next-auth/client'

import { Container } from '@styles/components/Autentication'

export const Autentication: React.FC = () => {
  const [ session ] = useSession()

  console.log(session)

  return (
    <Container>
      <div className="title">
        <h1>Para garantir sua vaga no evento é necessário que se identifique</h1>
      </div>

      <div className="optionsAuth">
        <div className="padlock">
          <img src="/icons/padlock.svg" alt="Cadeado"/>
        </div>
        {!session && <>
          <span>Continue com</span>
          <button onClick={() => {
            signIn("google", {callbackUrl: 'http://localhost:3000/payment'})
          }}>
            <img src="/icons/google.svg" alt="Google"/>
            Google
            <img src="/icons/littleArrow.svg" alt="Avançar"/>
          </button>
        </>}
      </div>
    </Container>
  )
}
