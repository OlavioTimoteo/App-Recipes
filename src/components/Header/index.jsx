import React from 'react';
import Proptypes from 'prop-types';
import SearchBar from '../SearchBar';

import Container from './styles';

export default function Header({ pagename, completeSearch }) {
  return (
    <>
      <Container>
        <h1
          data-testid="page-title"
        >
          { pagename}
        </h1>
      </Container>
      { completeSearch && <SearchBar /> }
    </>
  );
}

Header.propTypes = {
  pagename: Proptypes.string.isRequired,
  completeSearch: Proptypes.bool,
};

Header.defaultProps = {
  completeSearch: false,
};
