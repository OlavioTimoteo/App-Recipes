import React, { useState } from 'react';
import Header from '../components/Header';
import CardRecipiesDone from '../components/CardRecipiesDone';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';

function RecipesDone() {
  const [doneRecipes] = useState(() => {
    const arrayWithFoodDone = localStorage.getItem('doneRecipes');
    return arrayWithFoodDone ? JSON.parse(arrayWithFoodDone) : [];
  });
  const [filterCategory, setFilterCategory] = useState(doneRecipes);

  return (
    <>
      <Header pagename="Receitas Feitas" />
      <section>
        <FilterButtons
          favoriteRecipes={ doneRecipes }
          onSetFilterFavorites={ setFilterCategory }
        />
        <article>
          {
            doneRecipes.length === 0 ? <h1>Sem comidas finalizadas.</h1>
              : filterCategory.map((element, index) => (
                <CardRecipiesDone
                  key={ element.id }
                  doneFood={ element }
                  index={ index }
                />))
          }
        </article>
      </section>
      <Footer />
    </>
  );
}

export default RecipesDone;
