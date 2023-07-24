import React from 'react';
import { Outlet,Link } from 'react-router-dom'
import { Fragment } from 'react'
import './navbar.styles.css'
import logo from '../../assets/food-svgrepo-com.svg'

const Navigation = ()=>{
    return(
      <Fragment>
          <div className='navigation'>
              <Link className='logo-container' to='/'>
                  <img className="logo" src={logo} alt="Logo"/>
              </Link>
              <p>Food Fusion</p>
             <div className="nav-links-container">
                <Link className='nav-link' to='/receipes'>Receipes</Link>
                <Link className='nav-link' to='/categories'>Categories</Link>
             </div>
          </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;