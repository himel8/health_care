import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
  const navStyle ={color:'#FFA500', fontWeight: '600', backgroundColor:'#07294E', padding:'8px 15px', borderRadius:'10px'}
  const {user, logOut} = useAuth();
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <Link className="navbar-brand" to="/home">Health Care</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-nav">
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/home" activeStyle={navStyle}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/services" activeStyle={navStyle}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about" activeStyle={navStyle}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact" activeStyle={navStyle}>Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        {user.email?
         <h5 className='mt-2 me-3'>{user.displayName}</h5>
        :<Link to='/register'>
        <button className="btn custom-btn me-3" type="submit">Register</button>
        </Link>}
        
        {user.email?
        <button onClick={logOut} className="btn custom-btn" type="submit">Log Out</button>
        :
        (<Link to='/login'>
        <button className="btn  custom-btn" type="submit">Login</button>
        </Link>)}
      </form>
    </div>
  </div>
</nav>
        
        </div>
    );
};

export default Navbar;