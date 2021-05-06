import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 1025px) {
      width: 70%;
    }
  }

  @media(min-width: 1025px) {
    overflow: hidden;
    width: 100vw;
  }
`
