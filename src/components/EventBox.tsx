import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '@styles/components/EventBox'

import React, { useContext, useEffect, useState } from 'react'
import { DetailsContext } from 'context/DetailsContext'
import { api } from 'services/api'
import { EventsContext } from 'context/EventsContext'

export const EventBox: React.FC = () => {
  const { nameEvent, typeEvent, stateEvent } = useContext(EventsContext)
  const [ events, setEvents ] = useState([])

  const { changeIndice } = useContext(DetailsContext)

  function haveInfosTypes() {
    if (nameEvent && typeEvent) {
      return `&?type=${typeEvent}`
    } else if (nameEvent && !typeEvent) {
      return ``
    } else if (!nameEvent && typeEvent) {
      return `?type=${typeEvent}`
    } else if (!nameEvent && !typeEvent) {
      return ``
    }
  }

  function haveInfosStates() {
    if (nameEvent && stateEvent) {
      return `&?state=${stateEvent}`
    } else if (nameEvent && !stateEvent) {
      return ``
    } else if (!nameEvent && typeEvent && stateEvent) {
      return `&?state=${stateEvent}`
    } else if (!nameEvent && !typeEvent && stateEvent){
      return `?state=${stateEvent}`
    } else if (!nameEvent && !stateEvent) {
      return ``
    }
  }

  useEffect(() => {
    api.get(`events/${nameEvent && `?title=${nameEvent}`}${haveInfosTypes()}${haveInfosStates()}`)
    .then(response => {
      setEvents(response.data)
    })
  }, [nameEvent, typeEvent, stateEvent])

  return (
    <Container>
      {events[0] ? (
        <>
          {events.map((value, index) => {
            return (
              <div className="box" key={index} onClick={() => {
                changeIndice(Number(value.id))
                }}
              >
                <div className="wrapperBanner">
                  <img src="/images/backgroundBox.png" alt="Centro de informática"/>
                </div>

                <div className="infos">
                  {value.online && <div className="online">Online</div>}
                  {value.free && <div className="free">Gratuito</div>}
                </div>

                <h2>{value.title}</h2>

                <p>
                  <img src="/icons/calendar.svg" alt="Calendário"/>
                  {
                  `${format(new Date(value.start_date), "EEEEEE, d MMMM 'de' yyyy '-' HH:mm", {locale: ptBR})}`
                  }
                </p>
              </div>
            )
          })}
        </>
      ) : (
        <div className="contentNoEvent">
          <p className="noEvent">Nenhum evento foi encontrado com as informações acima.</p>
        </div>
      )}



    </Container>
  )
}
