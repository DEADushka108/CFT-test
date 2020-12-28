import React from 'react';
import {AppRoute} from '../../utils/const';
import {userDetails} from '../../types/user';
import {Link} from 'react-router-dom';

const UserCardSmall = (props) => {
  const {userInfo} = props;
  const {id, name, username, email, phone, website} = userInfo;

  return <article className="users-block__user-card-small user-card-small">
    <div className="user-card-small__image" >
      <img className="user-card-small__user-image" src="./img/content/no-user.png" alt={username}/>
      <div>
        <p className="user-card-small__name">{name}</p>
      </div>
    </div>
    <div className="user-card-small__user-info">
      <ul className="user-card-small__info-list">
        <li className="user-card-small__item">
          <p className="user-card-small__text">Username:</p>
          <Link to={`${AppRoute.USER}/${id}`} className="user-card-small__link">{username}</Link>
        </li>
        <li className="user-card-small__item">
          <p className="user-card-small__text">Email:</p>
          <a className="user-card-small__link" href={`mailto:${email}`}>{email}</a>
        </li>
        <li className="user-card-small__item">
          <p className="user-card-small__text">Phone:</p>
          <a className="user-card-small__link" href={`tel:${phone}`}>{phone}</a>
        </li>
        <li className="user-card-small__item">
          <p className="user-card-small__text">Website:</p>
          <a className="user-card-small__link" href={website}>{website}</a>
        </li>
      </ul>
    </div>
  </article>;
};

UserCardSmall.propTypes = {
  userInfo: userDetails,
};

export default UserCardSmall;

