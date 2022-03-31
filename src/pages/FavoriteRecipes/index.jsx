import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CardFavoriteRecipe from '../../components/CardFavoriteRecipe';
import FilterButtons from '../../components/FilterButtons';
import Header from '../../components/Header';
import { useAppContext } from '../../context/AppProvider';
import Footer from '../../components/Footer';

import Container from './styles';

function FavoriteRecipes() {
  const location = useLocation();
  const { favoriteRecipes } = useAppContext();
  const [dataFilterFavorite, setDataFilterFavorite] = useState([]);

  useEffect(() => {
    setDataFilterFavorite(favoriteRecipes);
  }, [favoriteRecipes]);

  function typeRecipe(recipe, index) {
    switch (recipe.type) {
    case 'comida':
      return (
        <CardFavoriteRecipe
          key={ index }
          index={ index }
          pathname={ location.pathname }
          recipe={ recipe }
          type="comida"
        />
      );
    case 'bebida':
      return (
        <CardFavoriteRecipe
          key={ index }
          index={ index }
          pathname={ location.pathname }
          recipe={ recipe }
          type="bebida"
        />
      );
    default:
      return null;
    }
  }
  return (
    <>
      <Header pagename="Receitas Favoritas" completeSearch={ false } />
      <Container>
        <FilterButtons
          favoriteRecipes={ favoriteRecipes }
          onSetFilterFavorites={ setDataFilterFavorite }
        />
        <section className="favorites">
          { dataFilterFavorite.length === 0 ? (
            <Card.Title className="text-favorite">
              Nenhum receita favorita encontrada!
            </Card.Title>)
            : dataFilterFavorite.map((recipe, index) => typeRecipe(recipe, index))}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;
