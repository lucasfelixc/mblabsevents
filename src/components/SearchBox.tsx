import { Container } from '@styles/components/SearchBox'
import { useEffect, useState } from 'react'

import states from '../../states.json'

export const SearchBox: React.FC = () => {
  const [ nameEvent, setNameEvent ] = useState('')
  const [ typeEvent, setTypeEvent ] = useState('')
  const [ stateEvent, setStateEvent ] = useState('')
  const [ dateEvent, setDateEvent ] = useState('')

  const listOfState = states.data

  return (
    <Container>
      <input
        type="search"
        name="searchEvent"
        className="searchEvent"
        placeholder="Pesquisar por eventos"
        value={nameEvent}
        onChange={(ev) => setNameEvent(ev.target.value)}
      />

      <select
        name="type"
        id="typeOfEvent"
        onChange={(ev) => setTypeEvent(ev.target.value)}
      >
        <option value="default"> Tipo do evento</option>
        <option value="allTypes">Todos os tipos</option>
        <option value="academic">Acadêmico - Seminário/Palestra</option>
        <option value="company">Empresas</option>
      </select>

      <select
        name="state"
        id="stateOfEvent"
        onChange={(ev) => setStateEvent(ev.target.value)}
      >
        <option value="default">Estado do evento</option>
        <option value="allStates">Todos os estados</option>

        {listOfState.map((value, index) => {
          return (
            <option value={value} key={index}>{value}</option>
          )
        })}

      </select>

      <select
        name="date"
        id="dateOfEvent"
        onChange={(ev) => setDateEvent(ev.target.value)}
      >
        <option value="default"> Data do evento </option>
        <option value="allDates">Todas as datas</option>
        <option value="nextWeek">Próxima semana</option>
        <option value="month">Esse mês</option>
        <option value="nextMonth">Próximo mês</option>
      </select>

      <button type="button">
        <img src="/icons/search.svg" alt="Buscar"/>
        Buscar
      </button>
    </Container>
  )
}
