import { SearchBox } from './SearchBox'

import { Container } from '@styles/components/Main'

export const Main: React.FC = () => {
  return (
    <Container>
      <div className="contentCall">
        <h1>Bem vindo</h1>
        <p>Confira os melhores eventos que irão ocorrer no Brasil</p>
      </div>

      <SearchBox />

      <p>Quer encontrar algum evento? Preencha acima informações sobre ele.</p>
    </Container>
  )
}
