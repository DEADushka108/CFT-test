import React from 'react';
import {FooterLogo, FooterWrapper, PageFooter} from '../../styles/footer/footer';
import {AppRoute} from '../../utils/const';

const Footer = () => {
  return (
    <PageFooter>
      <FooterWrapper>
        <FooterLogo to={`${AppRoute.ROOT}`}>
          Chirrup
        </FooterLogo>
        <div>
          <p>
            © 2020 Chirrup Ltd.
          </p>
        </div>
      </FooterWrapper>
    </PageFooter>
  );
};

export default Footer;
