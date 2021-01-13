import styled from 'styled-components';
import {hideVisually} from '../../utils/utils';
import {AdaptiveWidth, BgColor, TextColor} from '../variables/variables';

export const Article = styled.article`
  position: relative;
  width: 320px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${BgColor.LIGHT_BLUE};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 5px 20px 50px rgba(13, 46, 68, 0.2);
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    &:first-child {
      width: 640px;
    }
  }
  
  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    &:first-child {
      width: 650px;
    }
`;

export const UserWrapper = styled.div`
  width: auto;
  padding: 5px 20px;
  display: flex;
  justify-content: flex-start;
`;

export const UserImage = styled.img`
  width: 50px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const UserName = styled.p`
  color: ${TextColor.WHITE};
  font-size: 18px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 20px;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${BgColor.WHITE};

  &:hover {
    opacity: 0.7;
  }
`;

export const DeleteText = styled.span`
  ${hideVisually()}
`;

export const ContentWrapper = styled.div`
  background-color: ${BgColor.WHITE};
  width: auto;
  padding-bottom: 20px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0 0 0 1px rgba(13, 46, 68, 0.2);

  &:hover {
    box-shadow: none;
  }
`;

export const ContentImage = styled.img`
  width: 280px;
  height: auto;
`;

export const ContentTitle = styled.h3`
  margin: 0;
  padding: 10px 25px;
`;

export const ContentText = styled.p`
  margin: 0;
  padding: 5px 20px;
`;
