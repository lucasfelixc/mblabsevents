import { useContext } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container, Overlay } from '@styles/components/Details'
import { DetailsContext } from 'context/DetailsContext'

import events from '../../events.json'

export const Details: React.FC = () => {
  const [ session ] = useSession()
  const { indice, closeDetails } = useContext(DetailsContext)
  const eventsData = events.data

  return (
    <Container indice={indice}>
      <Overlay>
        <header>
          <button type="button" className="close" onClick={closeDetails}>
            <img src="/icons/close.svg" alt="Fechar"/>
          </button>
          <img src="/images/backgroundBox.png" alt="Background"/>
          <div className="glass" />
        </header>

        <main>
          <div className="title">
            <h2>{eventsData.map((value) => {
              if (value.id_event === indice) {
                return value.title
              }
            })}</h2>
          </div>

          <div className="date">
            <div className="day">
              <img src="/icons/calendar.svg" alt="Calendário"/>
              {eventsData.map((value) => {
                if (value.id_event === indice) {
                  return format(new Date(value.start_date), 'EEEEEE, d MMMM', {
                    locale: ptBR,
                  })
                }
              })}
            </div>
            <div className="hours">
              <img src="/icons/clock.svg" alt="Relógio"/>
              {eventsData.map((value) => {
                if (value.id_event === indice) {
                  return format(new Date(value.start_date), 'HH:mm', {
                    locale: ptBR,
                  })
                }
              })}
            </div>
          </div>

          <div className="description">
            <strong>Descrição</strong>
            <p>
              {eventsData.map((value) => {
                if (value.id_event === indice) {
                  return value.description
                }
              })}
            </p>
          </div>
        </main>

        <footer>
          {!session &&
            <Link href="authPage">
              <button type="button" onClick={closeDetails}>
                Participar
              </button>
            </Link>
          }
          {session &&
            <Link href="payment">
              <button type="button" onClick={closeDetails}>
                Participar
              </button>
            </Link>
          }
        </footer>
      </Overlay>
    </Container>
  )
}
