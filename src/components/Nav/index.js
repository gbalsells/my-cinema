import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

const styles = {
  nav: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginLeft: '1rem',
    fontSize: '1.5rem'
  }
};

const Nav = ({title}) => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="navbar-brand" href="#">
      <Link to='/' style={styles.nav} >
        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
        <a style={styles.title}> {title || 'MyCinema'}</a>
      </Link>
    </div>
  </nav>
)

export default Nav;