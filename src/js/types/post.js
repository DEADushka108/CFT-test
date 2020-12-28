import PropTypes from 'prop-types';

export const postDetails = PropTypes.shape({
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}).isRequired;
