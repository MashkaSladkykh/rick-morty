import {useRef} from 'react';

import mobileLogo from '../../img/mobile-logo.png';
import desktopLogo from '../../img/desktop-logo.png';
import '../../scss/header.scss';

export const Header = () => {
  const windowWidth = useRef(window.innerWidth);
  const width = windowWidth.current;
  return (
    <header className="header">
      {width < 768 ? <img src={mobileLogo} alt="logo" /> : <img src={desktopLogo} alt="logo" /> }
    </header>
  );
};