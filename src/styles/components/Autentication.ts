import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 3rem;
  margin-top: 4rem;

  > h1 {
    font: 800 2.7rem Lexend, sans-serif;
    color: ${props => props.theme.colors.white};
  }

  .contentCall {
    display: flex;
    align-items: center;

    margin: 6rem 0 2rem 0;

    > span {
      font: 400 1.1rem Inter, sans-serif;
      color: ${props => props.theme.colors.gray50};

      width: 14rem;

      padding-left: 1.5rem;
    }
  }

  > button {
    width: 90%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    color: ${props => props.theme.colors.gray50};

    border-radius: 5px;
    border: none;

    background: linear-gradient(90deg, #6538CD 0%, rgba(101, 56, 205, 0) 100%);
  }
`
