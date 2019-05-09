import React from 'react'; 

const Header = () => {
  return(
    <div>
    <header className="rimac-header">
    <nav className="navbar">
      <a href="https://www.rimac.com/">
        <img src="../img/home-rimac-logo.png" alt=""/>
      </a>
      <ul>
        <a href=""><li>Nuestros seguros</li><i className="fas fa-chevron-down"></i></a>
        <a href="https://www.rimac.com.pe/seguros-rimac/"><li>Promociones</li></a>
        <a href="https://www.rimac.com/como-usar-seguro"><li>Centro de ayuda</li></a>      
      </ul>
    </nav>
    <ul className="header-buttons">
      <li>
        <a className="btn-phone">
          <img className="btn-phone-img" src="../img/ico-phone.png" alt=""/>
          <p>01 411 - 1111</p>
        </a>
      </li>
      <li className="btn-search">
        <img src="/img/ico-lupa.png" alt=""/>
      </li>
      <li className="btn-my-account">
        <a href="">
          <i className="fas fa-user"></i>
          <p>MI CUENTA</p>
        </a>
      </li>
    </ul>
  </header>
    
    </div>
  );
}
export default Header;