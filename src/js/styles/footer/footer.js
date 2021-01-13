import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AdaptiveWidth, TextColor} from '../variables/variables';

export const PageFooter = styled.footer`
  width: auto;
  margin: 0 auto;
  margin-top: 40px;
`;

export const FooterWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 640px;
`;

export const FooterLogo = styled(Link)`
text-transform: uppercase;
font-size: 20px;
line-height: 36px;
text-decoration: none;

&:hover {
  color: ${TextColor.BLUE};
}

&:active {
  opacity: 0.5;
}

@media (min-width: ${AdaptiveWidth.TABLET}) {
  font-size: 30px;
  line-height: 40px;
`;

