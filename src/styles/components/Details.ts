import styled from "styled-components";

interface ContainerProps {
  indice: number
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(196, 196, 196, 0.36);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.indice != 0 ? 'display: flex;' : 'display: none;'}

  @media(min-width: 1025px) {
    display: flex;

    width: 30%;

    backdrop-filter: none;
    position: inherit;
  }
`

export const Overlay = styled.div`
  width: 80%;
  height: 80vh;
  max-width: 400px;

  text-align: center;
  position: relative;

  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  background: ${props => props.theme.colors.gray50};

  header {
    height: 25%;
    position: relative;
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;

    .close {
      position: absolute;
      z-index: 15;
      top: 0;
      right: 0;

      padding: 0.5rem 0.5rem 0 0;

      background: transparent;
      border: none;

    }

    .glass {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;

      background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #F7F8FA 100%);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  main {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      width: 85%;
      text-align: left;

      h2 {
        font: 700 1.4rem Inter, sans-serif;
      }
    }

    .date {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 1.5rem;
      margin-top: 1.5rem;

      img {
        width: 20px;
        height: 20px;
        padding-right: 0.5rem;
      }

      .day {
        text-transform: capitalize;
      }

      .day, .hours {
        display: flex;
        align-items: center;

        font-size: 0.9rem;
        color: ${props => props.theme.colors.gray200};
      }
    }

    .description {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      text-align: left;

      margin-top: 1.5rem;

      strong {
        width: 100%;

        padding-left: 1.5rem;
        color: ${props => props.theme.colors.gray500};
      }

      p {
        height: 10rem;
        padding: 0rem 1.5rem;
        margin-top: 1rem;
        overflow-y: auto;
      }
    }
  }

  footer {
    width: 100%;

    margin-top: 1rem;

    button {
      width: 15.5rem;
      height: 2.3rem;

      background: ${props => props.theme.colors.purple800};
      border: none;
      border-radius: 10px;

      color: ${props => props.theme.colors.gray50};
      font: 600 1.1rem Lexend, sans-serif;
    }
  }

  @media(min-width: 1025px) {
    width: 100%;
    height: 100vh;
    max-width: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 0;
    box-shadow: none;

    background: ${props => props.theme.colors.purple800};

    overflow: hidden;

    header {
      width: 100%;
      height: 30%;

      .glass {
        background: linear-gradient(180deg, rgba(130, 87, 229, 0) 0%, #6F48C9 100%);
      }
    }

    main {
      width: 100%;
      height: 65%;

      .title {
        width: 100%;

        > h2 {
          color: ${props => props.theme.colors.gray50};
          padding-left: 1.5rem;
        }

        .contentTitle {
          display: flex;
          align-items: center;
          justify-content: space-evenly;

          width: 100%;

          h1 {
            font: 500 1.5rem Lexend, sans-serif;
            color: ${props => props.theme.colors.gray50};
            width: 12rem;
          }
        }
      }

      .description {
        > strong {
          color: ${props => props.theme.colors.gray100}
        }

        > p {
          color: ${props => props.theme.colors.gray200}
        }
        .callEvent {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          > p {
            font: 400 1.2rem Inter, sans-serif;
            color: ${props => props.theme.colors.purple300};
          }
        }
      }
    }

    footer {
      button {
        background: ${props => props.theme.colors.purple500};
        margin-bottom: 2rem;
      }

      .logoBottom {
        img {
          width: 7rem;
          height: 2.3rem;
        }
      }
    }
  }
`
