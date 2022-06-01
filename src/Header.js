import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return(
    <header>
      <div> Login into Purav's Demo</div>
      <ul className="menu">
        <li><Link to="/"> Home </Link> </li>
        <li><Link to="/private"> Private </Link></li>
      </ul>
    </header>
  );

}


export default Header;
