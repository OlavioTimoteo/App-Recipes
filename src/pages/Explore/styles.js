import styled from 'styled-components';

const Container = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    width: 80%;


    button {
    height: 10rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.2);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    }

    & + a {
      margin-top: 2rem;
    }
  }

 
`;

export default Container;
