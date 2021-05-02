import { Container, Overlay } from '@styles/components/Details'
import { DetailsContext } from 'context/DetailsContext'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { useContext } from 'react'

export const Details: React.FC = () => {
  const { indice } = useContext(DetailsContext)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <Container indice={indice}>
      <Overlay>
        <header>
          <button type="button" className="close">
            <img src="/icons/close.svg" alt="Fechar"/>
          </button>
          <img src="/images/backgroundBox.png" alt="Background"/>
          <div className="glass" />
        </header>

        <main>
          <div className="title">
            <h2>Desenvolvimento web em 2021</h2>
          </div>

          <div className="date">
            <div className="day">
              <img src="/icons/calendar.svg" alt="Calendário"/>
              {currentDate}
            </div>
            <div className="hours">
              <img src="/icons/clock.svg" alt="Relógio"/>
              09:00
            </div>
          </div>

          <div className="description">
            <strong>Descrição</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa consectetur amet? Rerum accusantium numquam nostrum cupiditate, quae alias! Cum, dolorum! Ut suscipit ab error libero asperiores ipsa, maxime corporis.</p>
          </div>
        </main>

        <footer>
          <button type="button">
            Participar
          </button>
        </footer>
      </Overlay>
    </Container>
  )
}
