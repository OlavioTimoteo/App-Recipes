import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function InProgressFooter(props) {
  const { doneButtonIsDisabled, doneRecipes, type } = props;
  const typeOfRecipe = type === 'comida' ? 'Meal' : 'Drink';

  const history = useHistory();
  const changePath = () => {
    const saveDoneRecipes = [{
      id: doneRecipes[`id${typeOfRecipe}`],
      type,
      area: doneRecipes.strArea || '',
      category: doneRecipes.strCategory || '',
      alcoholicOrNot: doneRecipes.strAlcoholic || '',
      name: doneRecipes[`str${typeOfRecipe}`],
      image: doneRecipes[`str${typeOfRecipe}Thumb`],
      doneDate: new Date(),
      tags: [doneRecipes.strTags] || [],
    }];

    localStorage.setItem('doneRecipes', JSON.stringify(saveDoneRecipes));
    history.push('/receitas-feitas');
  };

  return (
    <section style={ { width: '95%' } }>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        style={ { width: '100%' } }
        disabled={ doneButtonIsDisabled }
        onClick={ changePath }
      >
        Finalizar Receita
      </button>
    </section>
  );
}

InProgressFooter.propTypes = {
  doneButtonIsDisabled: PropTypes.bool.isRequired,
  doneRecipes: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
