import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AdaptiveWidth, BgColor, TextColor} from '../variables/variables';

export const JournalSection = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;

  
@media (min-width: ${AdaptiveWidth.TABLET}) {
  width: 660px;
  padding-top: 40px;
}

@media (min-width: ${AdaptiveWidth.DESKTOP}) {
  width: 1000px;
}
`;

export const JournalLink = styled(Link)`
  position: absolute;
  width: 100px;
  top: -40px;
  right: 0;
  text-decoration: none;
  margin: 0 auto;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  color: ${TextColor.WHITE};
  background-color: ${BgColor.BLUE};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${TextColor.BLUE};
    background-color: transparent;
    box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
  }

  &:active {
    color: rgba(${TextColor.BLUE}, 0.3);
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 150px;
    top: -10px;
    right: 10px;
    display: flex;
    padding: 8px 12px;
  }
`;

export const JournalIcon = styled.svg`
  width: 15px;
  height: 15px;
  margin-right: 5px;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    margin-left: 25px;
  }
`;

export const JournalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    flex-direction: row;
  }
`;

export const JournalMore = styled.div`
  align-self: center;
`;

export const JournalButton = styled.button`
  width: 320px;
  margin: 0 auto;
  align-self: center;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 11px 12px 14px 12px;
  border-radius: 10px;
  text-align: center;
  color: ${TextColor.LIGHT_BLUE};
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${TextColor.BLUE};
    background-color: transparent;
    box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
  }

  &:active {
    color: rgba(${TextColor.BLUE}, 0.3);
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 460px;
    text-transform: uppercase;
  }
  
  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 960px;
    height: 70px;
  }
`;

export const JournalList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
