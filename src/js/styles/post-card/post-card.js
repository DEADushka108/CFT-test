import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AdaptiveWidth, BgColor, TextColor} from '../variables/variables';

export const Article = styled.article`
  width: auto;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${BgColor.BLUE};
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 50px;
  height: auto;
  margin: 10px 10px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 70px;
    margin: 10px 20px;
  }
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  color: ${TextColor.WHITE};
  text-align: center;
  flex-basis: 65%;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    flex-basis: 75%;
    font-size: 22px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    flex-basis: 80%;
    font-size: 26px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${BgColor.WHITE};
  border-bottom: 1px solid ${TextColor.LIGHT_BLUE};
`;

export const ContentTitle = styled.h2`
  @media (min-width: ${AdaptiveWidth.TABLET}) {
    font-size: 24px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 30px;
  }
`;

export const ContentImage = styled.img`
  width: 150px;
  height: auto;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 300px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 400px;
  }
`;

export const ContentText = styled.p`
  display: block;
  width: 300px;
  margin: 0 auto;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: auto;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 20px;
    margin: 0 auto;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 26px;
  }
`;
