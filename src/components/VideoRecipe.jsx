import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function VideoRecipe({ url }) {
  console.log(url.replace('watch?v=', 'embed/'));
  return (
    <Card.Body>
      <Card.Subtitle>
        Video
      </Card.Subtitle>
      <iframe
        src={ url.replace('watch?v=', 'embed/') }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </Card.Body>
  );
}

VideoRecipe.propTypes = {
  url: PropTypes.string.isRequired,
};
