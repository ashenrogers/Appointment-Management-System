import React from 'react';
import {Link} from 'react-router-dom';
import css from '../styles/NavBar.module.css';


function NavBar() {

    

    return (
       
        <div className={css.body}>
            <Link to='/' className={css.logo}>ICare</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>*/ }
           
            <nav className={css.navigation}> 
  <Link to='/home' className={css.blinkButton}>Home</Link>
  <Link to='/login' className={css.blinkButton}>Login</Link>             
  <Link to='/appoinments'>Appointment</Link>
  <Link to='/support' className={css.blinkButton}>Support</Link>
  
</nav>
        </div>

    )
}


export default NavBar;