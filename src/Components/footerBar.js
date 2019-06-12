import React from 'react';
import './footerBar.css';
import { ReactComponent as LogoProfile } from './pictos/plus-full.svg';

const FooterBar = () => (
  <div>
    <div className="footer-box">
      <LogoProfile className="footer-logo" />
    </div>
  </div>
);

export default FooterBar;
