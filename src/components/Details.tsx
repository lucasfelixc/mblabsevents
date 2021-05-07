import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import Router from 'next/router'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container, Overlay } from '@styles/components/Details'
import { DetailsContext } from 'context/DetailsContext'

import { api } from '../services/api'
import { EventsContext } from 'context/EventsContext'

export const Details: React.FC = () => {
  const [ events, setEvents ] = useState([])
  const [ session ] = useSession()
  const { indice, closeDetails } = useContext(DetailsContext)
  const { nameEvent } = useContext(EventsContext)
  const [ oldData, setOldData ] = useState([])

  useEffect(() => {
    api.get('events').then(response => {
      setEvents(response.data)
    })

    console.log(oldData)
  }, [])

  async function handleAddEvent() {
    closeDetails()
    await api.get(`users?email=${session.user.email}`)
      .then(response => {

        if (response.data.length === 0) {
          Router.push("/payment")
          setOldData(response.data)

        } else {
          setOldData(response.data)

        }

      })


    showData()

    oldData.map(async (value) => {
      await api.put(`users/${value.id}`, {
        name: value.name,
        email: value.email,
        event: value.event
      })
    })

  }

  function showData() {
    events.map((value) => {
      if (value.id === indice) {
        return oldData.filter((valueFilter) => {
          valueFilter.event.push({ name: value.title })
        })
      }
    })
  }

  // function clearEvents() {
  //   oldData.map(value => {
  //     return value.event = []
  //   })
  // }


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
                  if (value.id === indice) {
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
                    if (value.id === indice) {
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
                    if (value.id === indice) {
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
                    if (value.id === indice) {
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
                  <button type="button" onClick={handleAddEvent}>
                    Participar
                  </button>
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
