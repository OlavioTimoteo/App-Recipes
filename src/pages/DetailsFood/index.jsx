import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import CardDetailsFoods from '../../components/CardDetailsFoods';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/Footer';

import Container from './styles';

function DetailsFood() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, 'meals');

  return (
    <Container>
      { loading ? <Loading /> : data.map((meal, index) => (
        <CardDetailsFoods
          key={ index }
          recipeMeal={ meal }
          id={ id }
        />
      ))}
      <Footer />
    </Container>
  );
}

export default DetailsFood;
