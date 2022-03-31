import styled from 'styled-components';

const Container = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input[type="text"] {
    width: 90%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    background: var(--white-50);

    font-size: 1rem;
    font-weight: 400;

    position: relative;

    &::placeholder {
      color: var(--gray-100);
    }

    &:focus {
      outline: 1px solid var(--green-800);
    }
  }

  button {
    border: 0;
    background: inherit;
    position: absolute;
    top: 53px;
    right: 30px;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }

  div {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    label {
      font-size: 0.8rem;
      font-weight: bold;
      text-align: center;

      color: var(--gray-100);
      
      & + label {
        margin-left: 0.5rem;
      }

      input[type="radio"] {
      margin: 0.2rem;
      height: 1rem;
      width: 1rem;
      }
    }
  }
`;

export default Container;
