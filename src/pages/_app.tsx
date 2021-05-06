import Head from 'next/head'

import { AppProps } from 'next/dist/next-server/lib/router/router'

import GlobalStyle from '../styles/Global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Theme'
import { Container, Wrapper } from '@styles/App'

import { DetailsContext, DetailsProvider } from '../context/DetailsContext'
import { Provider } from 'next-auth/client'

import { Header } from 'components/Header'
import { Details } from 'components/Details'
import { useContext } from 'react'
import { EventsProvider } from 'context/EventsContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { indice } = useContext(DetailsContext)

  return (
    <Container>
      <Head>
        <title>MB Labs Events</title>
      </Head>

      <ThemeProvider theme={theme}>

        <Provider session={pageProps.session}>
          <DetailsProvider indice={indice}>
            <EventsProvider>
              <Wrapper>
                <main>
                  <Header />
                  <Component {...pageProps} />
                  <GlobalStyle indice={indice}/>
                </main>
                <Details />
              </Wrapper>
            </EventsProvider>
          </DetailsProvider>
        </Provider>

      </ThemeProvider>
    </Container>
  )
}

export default MyApp
