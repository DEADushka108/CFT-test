import React from 'react';
import PropTypes from 'prop-types';
import {postDetails} from '../../types/post';
import {ActionCreator} from '../../store/posts/posts';
import {connect} from 'react-redux';
import {JournalButton} from '../../styles/journal/journal';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <JournalButton type="button" onClick={onClick}>Show more</JournalButton> : null;
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

