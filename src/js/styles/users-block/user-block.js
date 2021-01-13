import styled from 'styled-components';
import {AdaptiveWidth} from '../variables/variables';

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;

  @media (min-width: ${AdaptiveWidth.TABLET}) {
    width: 660px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: ${AdaptiveWidth.DESKTOP}) {
    width: 1000px;
  }
`;
