import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;

  width: 100%;

  padding: 0.5rem 1rem;

  background: ${props => props.theme.colors.white};

  border-bottom: 1px solid ${props => props.theme.colors.gray100};

  img {
    padding: 0 1rem 0 0;
    border-right: 1px solid ${props => props.theme.colors.gray100};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;

    font-size: 0.8rem;
    color: ${props => props.theme.colors.gray200};
  }

  @media(min-width: 600px) {
    img {
      width: 11.25rem;
      height: 3.21rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 1025px) {
    height: 10vh;
  }
`
