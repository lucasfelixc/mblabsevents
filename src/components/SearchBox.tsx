import { Container } from '@styles/components/SearchBox'

import states from '../../states.json'

export const SearchBox: React.FC = () => {
  const listOfState = states.data

  return (
    <Container>
      <input
        type="search"
        name="searchEvent"
        className="searchEvent"
        placeholder="Pesquisar por eventos"
      />

      <select name="type" id="typeOfEvent">
        <option value="default"> Tipo do evento</option>
        <option value="allTypes">Todos os tipos</option>
        <option value="academic">Acadêmico - Seminário/Palestra</option>
        <option value="company">Empresas</option>
      </select>

      <select name="state" id="stateOfEvent">
        <option value="default" selected>Estado do evento</option>
        <option value="allStates">Todos os estados</option>

        {listOfState.map((value, index) => {
          return (
            <option value={value} key={index}>{value}</option>
          )
        })}

      </select>

      <select name="date" id="dateOfEvent">
        <option value="default" selected> Data do evento </option>
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
