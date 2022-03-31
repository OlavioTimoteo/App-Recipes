import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Container from './styles';

function ExploreDrinks() {
  const history = useHistory();

  const fetchAPI = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const { drinks } = await fetch(url).then((response) => response.json());
    return drinks;
  };

  const handleClick = async () => {
    const fetchResult = await fetchAPI();
    history.push(`/bebidas/${fetchResult[0].idDrink}`);
  };

  return (
    <>
      <Header pagename="Explorar Bebidas" completeSearch={ false } />
      <Container>
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ handleClick }
          >
            Me Surpreenda!
          </button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
