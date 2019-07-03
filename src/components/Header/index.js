import React, { Component } from 'react';

import facebookLogo from '../../assets/facebook-logo.png';
import userIcon from '../../assets/photo.jpg';
import './styles.css';

function Header() {
   return (
      <div className="header-container">
         <img src={facebookLogo} />
         <div className="profile">
            <p>Meu Perfil</p>
            <img src={userIcon}></img>
         </div>
      </div>
   );
}

export default Header;