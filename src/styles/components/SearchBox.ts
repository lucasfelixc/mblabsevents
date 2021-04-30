import styled from "styled-components";

export const Container = styled.div`
  width: 89%;
  height: 19rem;

  background: ${props => props.theme.colors.white};
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 2rem;

  .searchEvent {
    width: 85%;
    height: 2.4rem;

    border: 1px solid ${props => props.theme.colors.gray200};
    border-radius: 10px;

    color: ${props => props.theme.colors.gray800};

    padding: 0.5rem;

    outline: 0;
  }

  select {
    width: 85%;
    height: 2.4rem;

    border: 1px solid ${props => props.theme.colors.gray200};
    border-radius: 10px;

    background: transparent;
    color: ${props => props.theme.colors.gray200};

    padding: 0.5rem;

    outline: 0;
  }

  button {
    width: 85%;
    height: 2.4rem;

    /* background: ${props => props.theme.colors.purple500}; */
    background: linear-gradient(90deg, #8257E5 0%, #784AE2 100%);
    font: 600 1.2rem Inter, sans-serif;
    color: ${props => props.theme.colors.gray50};

    border: none;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 1rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`
