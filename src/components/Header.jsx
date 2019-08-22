import React from 'react';
import '../assets/styles/Header.scss';
// import icon from '../assets/icons/perfil-icon.png';
import JottaLogo from './JottaLogo';

const Header = () => {
  return (
    <header className='header'>
      <JottaLogo className='jotta__icon' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src='' alt='' />
          <p className='perfil__text'>Perfil</p>
        </div>
        <div>
          <ul>
            <li><a href='#'>Cuenta</a></li>
            <li><a href='#'>Cerrar Sesion</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
