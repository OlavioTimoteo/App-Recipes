import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  select {
    width: 180px;
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    background: var(--white-50);
    border: 0;

    font-size: 1rem;
    font-weight: bold;
    color: var(--color-background);
    opacity: 0.7;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default Container;
