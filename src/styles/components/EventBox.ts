import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .box {
    width: 89%;
    height: auto;
    background: ${props => props.theme.colors.white};

    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    cursor: pointer;

    transition: 0.35s;

    :hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    }

    .wrapperBanner {
      width: 100%;
      height: 6rem;

      border-radius: 10px 10px 0 0;

      img {
        width: 100%;
        height: inherit;

        border-radius: 10px 10px 0 0;
      }
    }

    .infos {
      width: 100%;
      margin-top: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .online {
        background: ${props => props.theme.colors.green500};

        width: 6rem;
        height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${props => props.theme.colors.gray50};
        font: 600 0.9rem Inter, sans-serif;

        border-radius: 10px;
      }

      .free {
        background: ${props => props.theme.colors.blueTwitter};

        width: 6rem;
        height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${props => props.theme.colors.gray50};
        font: 600 0.9rem Inter, sans-serif;

        border-radius: 10px;
      }
    }

    > h2 {
      width: 80%;

      font: 600 1.3rem Inter, sans-serif;
      color: ${props => props.theme.colors.gray800};

      padding: 1.5rem 0 0 1.5rem;
    }

    > p {
      width: 100%;
      display: flex;
      align-items: center;

      margin-top: 1rem;
      margin-bottom: 2rem;

      padding-left: 1.5rem;

      text-transform: capitalize;
      font: 400 0.9rem Inter, sans-serif;
      color: ${props => props.theme.colors.gray500};

      img {
        padding-right: 1rem;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
    }

    @media(min-width: 480px) {
      > h2 {
        font-size: 1.5rem;
      }

      .infos {
        .online, .free {
          font-size: 1.1rem;
          width: 8rem;
          height: 1.7rem;
        }
      }
    }
  }

  .contentNoEvent {
    width: 89%;

    display: flex;
    align-items: center;
    justify-content: center;

    .noEvent {
      font: 400 1rem Inter, sans-serif;
      color: ${props => props.theme.colors.gray200};
    }
  }

  @media(min-width: 600px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2.5rem;
    justify-items: center;

    margin-bottom: 2rem;

    .box {
      height: 17rem;
      margin: 0;

      .infos {
        .online, .free {
          font-size: 0.9rem;
          width: 6rem;
          height: 1.5rem;
        }
      }

      > h2 {
        font-size: 1.2rem;
      }
    }
  }
`
