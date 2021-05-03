import { createContext, ReactNode, useEffect, useState } from "react";

import events from '../../events.json'

interface EventsDataTypes {
  id_event: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  online: boolean;
  free: boolean;
  type: string;
  state: string;
  city: string;
  place: string;
  banner: string;
}

interface DetailsContextData {
  indice: number;
  changeIndice: (index: number) => void;
  closeDetails: () => void;
}

interface DetailsProviderProps {
  children: ReactNode;
  indice: number;
}

export const DetailsContext = createContext({} as DetailsContextData)

export function DetailsProvider({ children }: DetailsProviderProps) {
  const [ indice, setIndice ] = useState(0)

  function changeIndice(index: number) {
    setIndice(index)
    console.log(indice)
    console.log('Cheguei no contexto')
  }

  function closeDetails() {
    setIndice(0)
  }

  return (
    <DetailsContext.Provider
      value={{
        indice,
        changeIndice,
        closeDetails
      }}
    >
      {children}
    </DetailsContext.Provider>
  )
}
