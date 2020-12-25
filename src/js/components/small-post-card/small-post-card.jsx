import React from 'react';
import PropTypes from 'prop-types';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';
import {postDetails} from '../../types/post';
import {AppRoute} from '../../utils/const';
import {userDetails} from '../../types/user';
import {findItemById, getBody} from '../../utils/utils';
import {getUsersList} from '../../store/users/selectors';

const SmallPostCard = (props) => {
  const {postCard, usersList, redirect} = props;
  const {id, userId, title, body} = postCard;
  const userInfo = findItemById(userId, usersList);
  const {username} = userInfo;

  return <article className="journal__small-card small-card">
    <div className="small-card__user" >
      <img className="small-card__user-image" src="./img/content/no-user.png" alt={username}/>
      <p className="small-card__user-name" onClick={() => {
        redirect(`${AppRoute.USER}/${userId}`);
      }}>
        {username}
      </p>
      <button className="small-card__delete-button" type="button">
        <svg className="small-card__delete-icon">
          <use xlinkHref="#remove-item"></use>
        </svg>
        <span className="visually-hidden">Delete</span>
      </button>
    </div>
    <div className="small-card__wrapper" onClick={() => {
      redirect(`${AppRoute.POSTS}/${id}`);
    }}>
      <img className="small-card__content-image" src="./img/content/no-image.png" alt={title}/>
      <h3 className="small-card__title">{title}</h3>
      <p className="small-card__text">{getBody(body)}</p>
    </div>
  </article>;
};

SmallPostCard.propTypes = {
  postCard: postDetails,
  usersList: PropTypes.arrayOf(userDetails),
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  usersList: getUsersList(state),
});

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
});

export {SmallPostCard};
export default connect(mapStateToProps, mapDispatchToProps)(SmallPostCard);

