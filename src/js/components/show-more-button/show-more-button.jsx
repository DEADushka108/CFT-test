import React from 'react';
import PropTypes from 'prop-types';
import {postDetails} from '../../types/post';
import {ActionCreator} from '../../store/posts/posts';
import {connect} from 'react-redux';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="journal__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.arrayOf(postDetails),
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setPostsCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);

