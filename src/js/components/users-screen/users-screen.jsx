import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getUsersList} from '../../store/users/selectors';
import {connect} from 'react-redux';
import {userDetails} from '../../types/user';
import UserCardSmall from '../user-card-small/user-card-small';
import {Title} from '../../styles/main/main';
import {Section} from '../../styles/users-block/user-block';

const UsersScreen = (props) => {
  const {usersList} = props;

  return <Fragment>
    <Header/>
    <main className="page-main">
      <Title>users</Title>
      <Section>
        {usersList.map((userInfo) => {
          const {id} = userInfo;
          return <UserCardSmall key={id} userInfo={userInfo}/>;
        })}
      </Section>
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
