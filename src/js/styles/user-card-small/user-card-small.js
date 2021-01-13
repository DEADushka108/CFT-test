import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AdaptiveWidth, BgColor, TextColor} from '../variables/variables';

export const Article = styled.article`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${BgColor.LIGHT_BLUE};
  margin-bottom: 20px;

  &:hover {
    box-shadow: 5px 20px 50px rgba(13, 46, 68, 0.2);
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 460px;
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 90px;
  }
`;

export const UserImage = styled.img`
  width: 50px;
  height: auto;
  margin: 10px 20px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 90px;
    margin: 20px 30px;
  }
`;

export const UserName = styled.p`
  display: block;
  padding: 0;
  margin: 0;
  width: 150px;
  color: ${TextColor.WHITE};

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 28px;
    width: 300px;
  }
`;

export const InfoWrapper = styled.div`
  background-color: ${BgColor.WHITE};
  box-shadow: inset 0 0 0 1px rgba(13, 46, 68, 0.2);
`;

export const InfoList = styled.ul`
  width: 250px;
  margin: 20px auto;
  padding: 0;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 400px;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 10px auto;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const InfoText = styled.p`
  padding: 0;
  margin: 0;
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const InfoLink = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
