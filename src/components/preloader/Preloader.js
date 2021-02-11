import React from 'react';
import { CSSTransition } from 'react-transition-group';

import PreloaderStyled from './PreloaderStyled';

const Preloader = () => (
  <PreloaderStyled>
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="preloadr_title"
      unmountOnExit
    >
      <h1 className="preloadr_title">Phonebook</h1>
    </CSSTransition>
  </PreloaderStyled>
);

export default Preloader;
