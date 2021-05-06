import { createGlobalStyle } from 'styled-components'

interface GlobalProps {
  indice: number
}

export default createGlobalStyle<GlobalProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(min-width: 1025px) {
      overflow: hidden;
    }
  }

  body {
    background: ${props => props.theme.colors.gray50};
    ${props => props.indice === 4 ? 'overflow: hidden' : 'overflow: scroll'}

    @media(min-width: 1025px) {
      overflow: hidden;
    }
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: ${props => props.theme.colors.gray500};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${props => props.theme.colors.gray800};
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
