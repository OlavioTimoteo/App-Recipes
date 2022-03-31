import styled from 'styled-components';

const Container = styled.section`
  max-height: calc(100vh - 100px);
  overflow-x: hidden;
  padding: 1rem;

  div.filter-buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 110px);
    grid-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    button {
      height: 2.7rem;
      padding: 0.5rem;
      margin-top: 0.5rem;
      color: var(--green-800);

      border: 0;
      border-radius: 2.5rem;
      box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.2);

      font-size: 0.8rem;
      font-weight: bold;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  section.favorites {
    margin-top: 1rem;

    div.card {
      margin-top: 1rem;
    }
  }

  &::-webkit-scrollbar { 
    display: none;
  }
  
`;

export default Container;
