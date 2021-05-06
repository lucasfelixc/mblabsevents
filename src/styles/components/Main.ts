import styled from "styled-components";

interface ShowDisplay {
  isActiveDisplay: boolean;
}

export const Container = styled.div<ShowDisplay>`
  ${props => props.isActiveDisplay ? `display: flex` : `display: none`};
  flex-direction: column;
  align-items: center;

  width: 100%;

  .contentCall {
    width: 80%;

    margin-top: 2rem;

    > h1 {
      color: ${props => props.theme.colors.purple800};
    }

    > p {
      font-size: 0.9rem;
      padding-top: 0.5rem;
    }

    @media(min-width: 600px) {
      > h1 {
        font-size: 2.5rem;
      }

      > p {
        font-size: 1.1rem;
      }
    }
  }

  > p {
    color: ${props => props.theme.colors.gray200};

    width: 85%;
    margin-top: 2rem;
  }

  @media(min-width: 1025px) {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 90vh;

    ::-webkit-scrollbar {
      width: 7px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      border: 1px solid ${props => props.theme.colors.gray50};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.gray200};
      border-radius: 10px;
    }
  }
`
