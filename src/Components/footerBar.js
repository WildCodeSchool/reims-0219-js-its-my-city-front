import React from 'react';
import './footerBar.css';
import { ReactComponent as LogoProfile } from './pictos/profile.svg';
import { ReactComponent as LogoAdd } from './pictos/plus-full.svg';

const FooterBar = () => (
  <div>
    <div className="footer-box">
      <LogoProfile className="profile-logo" />
      <LogoAdd className="add-logo" />
    </div>
  </div>
);

export default FooterBar;
