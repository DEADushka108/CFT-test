import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Header = () => {

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className="page-header__logo">
          Chirrup
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={`${AppRoute.ROOT}`} className="main-nav__link main-nav__link--active">
                <svg className="main-nav__icon">
                  <use xlinkHref="#home-page"></use>
                </svg>
                <span className="main-nav__text">Main</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={`${AppRoute.USERS}`} className="main-nav__link">
                <svg className="main-nav__icon">
                  <use xlinkHref="#social-group"></use>
                </svg>
                <span className="main-nav__text">Users</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={`${AppRoute.CONTACTS}`} className="main-nav__link">
                <svg className="main-nav__icon">
                  <use xlinkHref="#message"></use>
                </svg>
                <span className="main-nav__text">Contact us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
