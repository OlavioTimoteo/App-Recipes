import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaHeart, FaList, FaUserAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Container from './styles';

function Profile() {
  const [favoriteRecipes] = useState(() => {
    const localStorageRecipes = localStorage.getItem('favoriteRecipes');
    return localStorageRecipes ? JSON.parse(localStorageRecipes) : [];
  });

  const [donesRecipes] = useState(() => {
    const localStorageRecipes = localStorage.getItem('doneRecipes');
    return localStorageRecipes ? JSON.parse(localStorageRecipes) : [];
  });

  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('user'));
    if (userEmail === null) {
      setEmail('Error, email não encontrado');
    } else {
      setEmail(userEmail.email);
    }
  }, []);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <Header pagename="Perfil" />
      <Container>
        <div>
          <FaUserAlt size={ 70 } className="profile" />
          <div className="user">
            <h4 data-testid="profile-email">{email}</h4>
            <p>{ email }</p>
          </div>
        </div>
        <div className="info-recipes">
          <div>
            <p>Favoritas</p>
            <FaHeart size={ 20 } color="red" />
            <span>{ favoriteRecipes.length }</span>
          </div>
          <div>
            <p>Feitas</p>
            <FaList size={ 20 } color="#FFAE1B" />
            <span>{ donesRecipes.length }</span>
          </div>
        </div>
        <div className="user">
          <button
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => history.push('/receitas-feitas') }
          >
            Receitas Feitas
          </button>

          <button
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => history.push('/receitas-favoritas') }
          >
            Receitas Favoritas
          </button>

          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ handleLogout }
          >
            Sair
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
