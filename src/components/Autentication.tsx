// import { GoogleLogin } from 'react-google-login'
import { signIn, signOut, useSession, SignInResponse } from 'next-auth/client'

import { Container } from '@styles/components/Autentication'

export const Autentication: React.FC = () => {
  const [ session ] = useSession()

  return (
    <Container>
      <div className="title">
        <h1>Para garantir sua vaga no evento é necessário que se identifique</h1>
      </div>

      <div className="padlock">
        <img src="/icons/padlock.svg" alt="Cadeado"/>
      </div>

      <div className="optionsAuth">
        {/* <span>Continue com</span>
        <GoogleLogin
          clientId="107644619120-tpmhup4v0qjc4iot559vfpivhc44pk91.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          buttonText=""
          className="loginGoogle"
          icon={false}
        >

        </GoogleLogin>

        <span>ou</span>
        <button type="button" className="loginApple">
          <img src="/icons/apple.svg" alt="Apple"/>
          Apple
          <img src="/icons/littleArrow.svg" alt="Avançar"/>
        </button> */}
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
