import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;

  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    text-align: start;
    padding: 0 1rem 0 1.5rem;
    margin-top: 1.5rem;

    h1 {
      font: 600 1.2rem Lexend, sans-serif;
      color: ${props => props.theme.colors.purple500};
    }
  }

  .optionsAuth {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3rem;

    width: 100%;

    .padlock {
      margin: 3rem 0 1.5rem 0;
    }

    span {
      color: ${props => props.theme.colors.gray200};
    }

    button {
      width: 70%;
      height: 3.8rem;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: linear-gradient(90deg, #E6E8EB 0%, rgba(247, 248, 250, 0) 100%);

      border: none;
      border-radius: 5px;

      margin: 1.75rem 0;

      img {
        width: 20px;
      }
    }
  }
`
