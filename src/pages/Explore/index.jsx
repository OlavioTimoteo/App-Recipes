import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Container from './styles';

function Explore() {
  return (
    <>
      <Header pagename="Explorar" completeSearch={ false } />
      <Container>
        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default Explore;
