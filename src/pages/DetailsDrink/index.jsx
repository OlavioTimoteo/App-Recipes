import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import CardDetailsDrinks from '../../components/CardDetailsDrinks';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/Footer';

import Container from './styles';

function DetailsDrink() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, 'drinks');

  return (
    <Container>
      { loading ? <Loading /> : data && data.map((drink, index) => (
        <CardDetailsDrinks
          key={ index }
          recipeDrink={ drink }
          id={ id }
        />
      ))}
      <Footer />
    </Container>
  );
}

export default DetailsDrink;
