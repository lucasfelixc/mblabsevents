import { Container } from '@styles/components/Autentication'

export const Autentication: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo</h1>

      <div className="contentCall">
        <img src="/icons/google.svg" alt="Google"/>
        <span>Faça login com sua conta do gmail</span>
      </div>

      <button type="button">
        Continuar com o google
        <img src="/icons/arrowRight.svg" alt="Avançar"/>
      </button>
    </Container>
  )
}
