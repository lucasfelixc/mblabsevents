import { createContext, ReactNode, useEffect, useState } from "react";

interface EventsContextData {
  nameEvent: string;
  typeEvent: string;
  stateEvent: string;
  dateEvent: string;
  editTitle: (title: string) => void;
  editType: (type: string) => void;
  editState: (state: string) => void;
}

interface EventsProviderProps {
  children: ReactNode;
}

export const EventsContext = createContext({} as EventsContextData)

export function EventsProvider({ children }: EventsProviderProps) {
  const [ nameEvent, setNameEvent ] = useState('')
  const [ typeEvent, setTypeEvent ] = useState('')
  const [ stateEvent, setStateEvent ] = useState('')
  const [ dateEvent, setDateEvent ] = useState('')

  function editTitle (title: string) {
    setNameEvent(title)
  }

  function editType (type: string) {
    setTypeEvent(type)
  }

  function editState (type: string) {
    setStateEvent(type)
  }

  return (
    <EventsContext.Provider
    value={{
      nameEvent,
      typeEvent,
      stateEvent,
      dateEvent,
      editTitle,
      editType,
      editState
    }}>
      {children}
    </EventsContext.Provider>
  )
}
