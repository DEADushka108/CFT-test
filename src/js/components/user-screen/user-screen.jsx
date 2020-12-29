import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getActiveUser, getUserPosts} from '../../store/users/selectors';
import {Operation as UsersOperation} from '../../store/users/users';
import {connect} from 'react-redux';
import {userDetails} from '../../types/user';
import {postDetails} from '../../types/post';
import UserCardSmall from '../user-card-small/user-card-small';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const UserScreen = (props) => {
  const {userInfo, userPosts, match, onLoadPosts, onLoadUser} = props;
  const routeId = Number(match.params.id);

  useEffect(() => {
    onLoadUser(routeId);
    onLoadPosts(routeId);
  }, [routeId]);


  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">User</h1>
      <section className="user-block">
        <h2 className="user-block__title">User information:</h2>
        <UserCardSmall userInfo={userInfo}/>
      </section>
      <section className="user-posts">
        <h2 className="user-posts__title">User posts:</h2>
        <ul className="user-posts__list">
          {userPosts.map((post, index) => {
            const {id, title} = post;
            return <li key={id} className="user-posts__item">
              <Link to={`${AppRoute.POSTS}/${id}`} className="user-posts__link">{index + 1}. {title}</Link>
            </li>;
          })}
        </ul>
      </section>
    </main>
    <Footer/>

  </Fragment>;
};

UserScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  userInfo: userDetails,
  userPosts: PropTypes.arrayOf(postDetails),
  onLoadPosts: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: getActiveUser(state),
  userPosts: getUserPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadUser(id) {
    dispatch(UsersOperation.loadUser(id));
  },
  onLoadPosts(id) {
    dispatch(UsersOperation.loadUserPosts(id));
  },
});

export {UserScreen};
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
