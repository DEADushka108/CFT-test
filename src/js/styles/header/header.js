import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AdaptiveWidth, TextColor} from '../variables/variables';

export const PageHeader = styled.header`
  width: 360px;
  margin: 0 auto;
  padding-top: 40px;
  
  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
margin: 0 20px;
text-align: center;

@media (min-width: ${AdaptiveWidth.TABLET}) {
  width: 640px;
  margin: 0 auto;
}

@media (min-width: ${AdaptiveWidth.DESKTOP}) {
  width: 1300px;
}
`;

export const Logo = styled(Link)`
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${TextColor.LIGHT_BLUE};

  &:hover {
    color: ${TextColor.BLUE};
  }

  &:active {
    opacity: 0.5;
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const MainNav = styled.nav`
  margin-top: 40px;
  margin-bottom: 40px;
  
  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 960px;
    margin: 40px auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${TextColor.LIGHT_BLUE};
  line-height: 30px;

  &:hover {
    fill: ${TextColor.BLUE};
    color: ${TextColor.BLUE};
    text-decoration: underline;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const Icon = styled.svg`
  fill: ${TextColor.LIGHT_BLUE};
  width: 27px;
  height: 27px;

  &:hover {
    fill: ${TextColor.BLUE};
  }

  &:active {
    opacity: 0.3;
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    display: none;
`;

export const NavText = styled.span`
  display: none;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    display: block;
    font-size: 24px;
  }
`;
