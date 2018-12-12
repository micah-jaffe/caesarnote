import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'rgb(0, 168, 45)'
  };

  return ( 
    <div className="home">
      <nav className="main-nav">
        <img className="logo" src={window.images.logo} />

        <ul className="dropdown">
          <li>Plans</li>
          <li>Features</li>
          <li>Help &amp; Learning</li>
          <li>About Us</li>
        </ul>

        <ul className="signup-login">
          <li>
            <Link id="signup-link" to="/signup">Sign up</Link>
          </li>
          <li>
            or
          </li>
          <li>
            <Link id="login-btn" to="/login">Log in</Link>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Home;