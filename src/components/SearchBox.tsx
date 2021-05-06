import { Container } from '@styles/components/SearchBox'
import { EventsContext } from 'context/EventsContext'
import { useContext, useState } from 'react'

import states from '../../states.json'

export const SearchBox: React.FC = () => {
  const { editTitle, editType, editState } = useContext(EventsContext)

  const [ nameEvent, setNameEvent ] = useState('')
  const [ typeEvent, setTypeEvent ] = useState('')
  const [ stateEvent, setStateEvent ] = useState('')
  const [ dateEvent, setDateEvent ] = useState('')

  const listOfState = states.data

  function handleSetData() {
    editTitle(nameEvent)
    editType(typeEvent)
    editState(stateEvent)
  }

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
        <option value=""> Tipo do evento</option>
        <option value="allTypes">Todos os tipos</option>
        <option value="academic">Acadêmico - Seminário/Palestra</option>
        <option value="company">Empresas</option>
      </select>

      <select
        name="state"
        id="stateOfEvent"
        onChange={(ev) => setStateEvent(ev.target.value)}
      >
        <option value="">Estado do evento</option>
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
        <option value=""> Data do evento </option>
        <option value="allDates">Todas as datas</option>
        <option value="nextWeek">Próxima semana</option>
        <option value="month">Esse mês</option>
        <option value="nextMonth">Próximo mês</option>
      </select>

      <button type="button" onClick={handleSetData}>
        <img src="/icons/search.svg" alt="Buscar"/>
        Buscar
      </button>
    </Container>
  )
}
