import { SearchBox } from './SearchBox'
import { EventBox } from './EventBox'

import { Container } from '@styles/components/Main'

export const Main: React.FC = () => {
  const showBoxs = true

  return (
    <Container>
      <div className="contentCall">
        <h1>Bem vindo</h1>
        <p>Confira os melhores eventos que irão ocorrer no Brasil</p>
      </div>

      <SearchBox />

      {!showBoxs && <p>Quer encontrar algum evento? Preencha acima informações sobre ele.</p>}
      <EventBox />
    </Container>
  )
}
