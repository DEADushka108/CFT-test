import React from 'react';
import {AppRoute} from '../../utils/const';
import {PageHeader, Wrapper, Logo, MainNav, List, Item, Icon, NavText, NavLink} from '../../styles/header/header';

const Header = () => {

  return (
    <PageHeader>
      <Wrapper>
        <Logo to={AppRoute.ROOT}>
          Chirrup
        </Logo>
        <MainNav>
          <List>
            <Item>
              <NavLink to={`${AppRoute.ROOT}`}>
                <Icon>
                  <use xlinkHref="#home-page"></use>
                </Icon>
                <NavText>Main</NavText>
              </NavLink>
            </Item>
            <Item>
              <NavLink to={`${AppRoute.USERS}`}>
                <Icon>
                  <use xlinkHref="#social-group"></use>
                </Icon>
                <NavText>Users</NavText>
              </NavLink>
            </Item>
            <Item>
              <NavLink to={`${AppRoute.CONTACTS}`}>
                <Icon>
                  <use xlinkHref="#message"></use>
                </Icon>
                <NavText>Contact us</NavText>
              </NavLink>
            </Item>
          </List>
        </MainNav>
      </Wrapper>
    </PageHeader>
  );
};

Header.propTypes = {};

export default Header;
