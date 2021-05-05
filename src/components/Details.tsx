import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container, Overlay } from '@styles/components/Details'
import { DetailsContext } from 'context/DetailsContext'

import { api } from '../services/api'

export const Details: React.FC = () => {
  const [ events, setEvents ] = useState([])
  const [ session ] = useSession()
  const { indice, closeDetails } = useContext(DetailsContext)

  useEffect(() => {
    api.get('events').then(response => {
      setEvents(response.data)
    })
  }, [])

  return (
    <Container indice={indice}>
      <Overlay>
        <header>
          {indice != 0 && (
            <>
              <button type="button" className="close" onClick={closeDetails}>
                <img src="/icons/close.svg" alt="Fechar"/>
              </button>
              <img src="/images/ci.png" alt="Background"/>
            </>
          )}
          <div className="glass" />
        </header>

        <main>
          <div className="title">
            {indice != 0 ? (
              <h2>
                {events.map((value) => {
                  if (value.id_event === indice) {
                    return value.title
                  }
                })}
              </h2>
            ) : (
              <div className="contentTitle">
                <img src="/icons/calendarWhite.svg" alt="Calendário"/>
                <h1>Detalhes do evento</h1>
              </div>
            )}
          </div>

          <div className="date">
            <div className="day">
              {indice != 0 && (
                <>

                  <img src="/icons/calendar.svg" alt="Calendário"/>

                  {events.map((value) => {
                    if (value.id_event === indice) {
                      return format(new Date(value.start_date), 'EEEEEE, d MMMM', {
                        locale: ptBR,
                      })
                    }
                  })}

                </>
              )}


            </div>
            <div className="hours">
              {indice != 0 && (
                <>
                  <img src="/icons/clock.svg" alt="Relógio"/>

                  {events.map((value) => {
                    if (value.id_event === indice) {
                      return format(new Date(value.start_date), 'HH:mm', {
                        locale: ptBR,
                      })
                    }
                  })}

                </>
              )}


            </div>
          </div>

          <div className="description">
            {indice != 0 ? (
              <>
                <strong>Descrição</strong>
                <p>
                  {events.map((value) => {
                    if (value.id_event === indice) {
                      return value.description
                    }
                  })}
                </p>
              </>
            ) : (
              <div className="callEvent">
                <p>Escolha um evento para ver os detalhes</p>
              </div>
            )}

          </div>
        </main>

        <footer>
          {indice != 0 ? (
            <>
              {
                !session && (
                  <Link href="authPage">
                    <button type="button" onClick={closeDetails}>
                      Participar
                    </button>
                  </Link>
                )
              }

              {
                session && (
                  <Link href="payment">
                    <button type="button" onClick={closeDetails}>
                      Participar
                    </button>
                  </Link>
                )
              }
            </>
          ) : (
            <div className="logoBottom">
              <img src="/icons/logoBottom.svg" alt="MB Labs events"/>
            </div>
          )}
        </footer>
      </Overlay>
    </Container>
  )
}
