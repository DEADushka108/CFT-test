import styled from 'styled-components';
import {hideVisually} from '../../utils/utils';
import {AdaptiveWidth, ButtonColor, TextColor} from '../variables/variables';

export const Section = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    padding-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 0 auto;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 540px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 960px;
    font-size: 26px;
  }
`;

export const Legend = styled.legend`
  ${hideVisually()}
`;

export const Item = styled.p`
  display: flex;
  flex-direction: column;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    margin-bottom: 17px;
    margin-left: 46px;
    margin-right: 45px;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    margin-bottom: 12px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 20px 20px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    padding: 25px 40px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${TextColor.BLUE};
  }
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  padding: 20px 20px;

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    padding: 25px 40px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${TextColor.BLUE};
  }
`;

export const SubmitButton = styled.button`
  margin-bottom: 20px;
  width: 281px;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 11px 12px 14px 12px;
  border-radius: 10px;
  text-align: center;
  color: ${TextColor.WHITE};
  font-weight: 700;
  background-color: ${ButtonColor.BLUE};
  border: none;
  cursor: pointer;
  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);

  &:hover,
  &:focus {
    color: ${TextColor.BLUE};
    background-color: transparent;
    padding: 8px 9px 11px 9px;
    border: 3px solid ${TextColor.BLUE};
  }

  &:active {
    color: ${TextColor.BLUE};
    opacity: 0.3;
  }

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    text-transform: uppercase;
    margin-top: 48px;
    width: 428px;
    padding-top: 28px;
    padding-bottom: 28px;
    margin-bottom: 16px;

    &:hover {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`;
