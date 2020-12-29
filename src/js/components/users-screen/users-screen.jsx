import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getUsersList} from '../../store/users/selectors';
import {connect} from 'react-redux';
import {userDetails} from '../../types/user';
import UserCardSmall from '../user-card-small/user-card-small';

const UsersScreen = (props) => {
  const {usersList} = props;

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">users</h1>
      <section className="users-block">
        {usersList.map((userInfo) => {
          const {id} = userInfo;
          return <UserCardSmall key={id} userInfo={userInfo}/>;
        })}
      </section>
    </main>

    <Footer/>

  </Fragment>;
};

UsersScreen.propTypes = {
  usersList: PropTypes.arrayOf(userDetails),
};

const mapStateToProps = (state) => ({
  usersList: getUsersList(state),
});

export {UsersScreen};
export default connect(mapStateToProps)(UsersScreen);
