import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '@styles/components/Header'

export const Header: React.FC = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return(
    <Container>
      <img src="/icons/logoMobile.svg" alt="MB Labs events"/>

      <div className="line" />

      <span>{currentDate}</span>
    </Container>
  )
}
