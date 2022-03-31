import styled from 'styled-components';

const Container = styled.section`
  max-height: calc(100vh - 100px);
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.75rem;

  button {
    border: none;
    border-radius: 0.5rem;
    background: var(--white-50);


    h3 {
      font-size: 1.1rem;
      font-weight: bold;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  &::-webkit-scrollbar { 
    display: none;
  }
  
`;

export default Container;
