import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '@styles/components/EventBox'

import React, { useContext, useEffect, useState } from 'react'
import { DetailsContext } from 'context/DetailsContext'
import { api } from 'services/api'

interface EventBoxShow {
  show: boolean
}

export const EventBox: React.FC<EventBoxShow> = ({ show }) => {
  const [ events, setEvents ] = useState([])

  const { changeIndice } = useContext(DetailsContext)

  useEffect(() => {
    api.get('events').then(response => {
      setEvents(response.data)
    })
  }, [])

  return (
    <Container show={show}>

      {events.map((value, index) => {
        return (
          <div className="box" key={index} onClick={() => changeIndice(Number(value.id_event))}>
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

    </Container>
  )
}
