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
          <div className="splash-text">
            <h1>
              Feel organized without the effort
            </h1>
            <p>
              Caesarnote is a cryptographic cloud-based note-taking app designed to ensure that your data security comes first.
            </p>
            <Link id="splash-signup-btn" to="/signup">
              Sign up for free
            </Link>

          </div>

          <div className="splash-image-container"></div>

        </div>

        <div className="focus-section">
          <img src={window.images.homepage_focus} alt="" />
          <h2>Focus on what matters most</h2>

          <div className="cards-container">
            <div className="card">
              Manage everything from big projects to personal moments.
          </div>
            <div className="card">
              Capture ideas and inspiration in notes, voice, and pictures.
          </div>
            <div className="card">
              Never lose track of your tasks and deadlines.
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

