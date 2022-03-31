import styled from 'styled-components';

const Container = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    position: relative;
    width: 70%;
    transform: rotate(160deg);
    
    & + img {
      transform: rotate(340deg);
      position: absolute;
      top: 100px;
      width: 20%;
    }
  }

  h2 {
    color: var(--gray-800);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray-100);
    font-size: 0.9rem;
  }

  input {
    width: 90%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    background: var(--white-50);

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--gray-100);
    }

    &:focus {
      outline: 1px solid var(--yellow-800);
    }

    & + input {
      margin-top: 0.7rem;
    }
  }

  button[type='submit'] {
    width: 90%;
    height: 2.5rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.5rem;

    background: var(--yellow-800);

    font-size: 1rem;
    font-weight: 600;
    
    color: var(--white-0);
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }

  hr {
    width: 70%;
    height: 2px;
    border-radius: 2px;
    background: var(--green-800);
  }

  div {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    button {
      border: 0;
      border-radius: 2.5rem;
      height: 2.5rem;
      width: 2.5rem;
      margin: 0.5rem 1rem;
      background: var(--yellow-800);

      transition: filter 0.2s;
      
      &:hover {
        filter: opacity(0.7);
      }

      svg {
        width: 25px;
      }
    }
  }
`;

export default Container;
