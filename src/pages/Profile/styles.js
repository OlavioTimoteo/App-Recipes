import styled from 'styled-components';

const Container = styled.section`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;


    svg.profile {
      background: var(--white-50);
      border-radius: 50%;
    }

    &.user {
      max-width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      h4 {
        font-size: 0.9rem;
        font-weight: 600;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }

  div.info-recipes {
    width: 30%;
    border-radius: 0.5rem;
    background: var(--white-50);
    margin-left: 4.5rem;
    box-shadow: 1px 3px 8px 1px rgba(0, 0, 0, 0.2);


    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;


      p {
        font-size: 0.6rem;
        margin: 0
      }

      svg {
      background: inherit;
      }

      span {
        font-size: 0.6rem;
        font-weight: 600;
      }
    }


  }

  button {
    height: 2.7rem;
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    color: var(--green-800);

    border: 0;
    border-radius: 2.5rem;
    box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.2);

    font-size: 0.8rem;
    font-weight: bold;

    transition: filter 0.2s;

    &:first-child {
      margin-top: 4rem;
    }

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export default Container;
