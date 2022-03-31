import styled from 'styled-components';

const Container = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0.3rem;
  position: fixed;
  width: 100%;
  background: var(--white-0);

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: var(--green-800);
    max-width: 30px;
    margin-top: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }

    span {
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
`;

export default Container;
