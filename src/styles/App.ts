import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    flex: 1;

    @media(min-width: 1025px) {
      width: 70%;
    }
  }

  @media(min-width: 1025px) {
    overflow: hidden;
    width: 100vw;
  }
`
