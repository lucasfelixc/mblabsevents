import { Autentication } from 'components/Autentication'

import { Container } from '@styles/pages/AuthPage'

export default function Home () {
  return (
    <Container>
      <img src="/icons/logoWhite.svg" alt="MB Labs events"/>
      <Autentication />
    </Container>
  )
}
