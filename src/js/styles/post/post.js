import styled from 'styled-components';
import {hideVisually} from '../../utils/utils';
import {AdaptiveWidth, BgColor, TextColor} from '../variables/variables';

export const Section = styled.section`
  width: 320px;
  margin: 0 auto;

  
  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 640px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 1000px;
  }
`;

export const CommentsTitle = styled.h2`
  font-size: 16px;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    font-size: 20px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 26px;
  }
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    font-size: 18px;
  }
  
  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    font-size: 24px;
  }
`;

export const CommentsItem = styled.li`
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid ${TextColor.LIGHT_BLUE};

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -21px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 20px solid ${TextColor.LIGHT_BLUE};
  }
`;

export const DeleteIcon = styled.svg`
  width: 25px;
  height: 25px;

  &:hover {
    opacity: 0.7;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteText = styled.span`
  ${hideVisually()}
`;

export const UserWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid ${BgColor.LIGHT_BLUE};
`;

export const UserImage = styled.img`
  width: 30px;
  margin: 10px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 50px;
  }
`;

export const UserName = styled.p`
  padding: 10px 20px;
`;

export const ContentWrapper = styled.div`
  padding: 10px 20px;
`;
