import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
  }

  > p {
    color: ${props => props.theme.colors.gray200};

    width: 85%;
    margin-top: 2rem;
  }
`
