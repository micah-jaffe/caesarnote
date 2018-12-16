import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return ( 
    <div className="home">

      <nav className="main-nav">
        <div className="left-nav-wrapper">
          <div className="logo-with-text align-middle">
            <a href="/">
              <img className="logo" src={window.images.logo} />
              <h1>Caesarnote</h1>
            </a>
          </div>

          <ul className="nav-links">
            <li>Plans</li>
            <li>Features</li>
            <li>Help &amp; Learning</li>
            <li>About Us</li>
          </ul>
        </div>

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

      <div className="body">
        <div className="hero-image">

        </div>
      </div>


    </div>
  );
};

export default Home;

