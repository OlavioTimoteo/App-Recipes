import React from 'react';
import { FaCocktail, FaCompass, FaHome, FaUser } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import Container from './styles';

function Footer() {
  return (
    <Container data-testid="footer">
      <Link to="/comidas">
        <FaHome size={ 25 } />
        <span>Home</span>
      </Link>
      <Link to="/perfil">
        <FaUser size={ 25 } />
        <span>Perfil</span>
      </Link>
      <Link to="/explorar">
        <FaCompass size={ 25 } />
        <span>Explorar</span>
      </Link>
      <Link to="/bebidas">
        <FaCocktail size={ 25 } />
        <span>Bebidas</span>
      </Link>
      <Link to="/comidas">
        <GiHotMeal size={ 25 } />
        <span>Comidas</span>
      </Link>
    </Container>
  );
}

export default Footer;
