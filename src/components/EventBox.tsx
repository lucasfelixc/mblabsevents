import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '@styles/components/EventBox'

import events from '../../events.json'

export const EventBox: React.FC = () => {
  const eventsData = events.data

  return (
    <Container>

      {eventsData.map((value, index) => {
        return (
          <div className="box" key={index}>
            <div className="wrapperBanner">
              <img src="/images/backgroundBox.png" alt="Centro de informática"/>
            </div>

            <div className="infos">
              {value.online && <div className="online">Online</div>}
              {value.free && <div className="free">Gratuito</div>}
            </div>

            <h2>{value.title}</h2>

            <p>
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
