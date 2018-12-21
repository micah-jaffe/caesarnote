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

        <div className="focus homepage-section">
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

        <div className="stairs homepage-section">
          <img src={window.images.homepage_stairs} alt="" />
          <h2>At work, at home, and everywhere in between</h2>
          <p>Caesarnote's plans and pricing are designed to fit your needs.</p>
        </div>

        <div className="brain homepage-section">
          <div className="info">
            <h3>Remember everything important</h3>
            <p>A single place for your notes, ideas, lists, and reminders.</p>
          </div>

          <div className="image">
            <img src={window.images.homepage_brain} alt="" />
          </div>
        </div>

        <div className="devices homepage-section">
          <div className="image">
            <img src={window.images.homepage_devices} alt="" />
          </div>

          <div className="info">
            <h3>Stay organized, wherever you are</h3>
            <p>Plan, keep records, and manage projects from any device-even offline.</p>
          </div>
        </div>

        <div className="teams homepage-section">
          <div className="info">
            <h3>Collaborate with your team</h3>
            <p>Manage projects, deadlines, clients, and meetings with ease.</p>
          </div>

          <div className="image">
            <img src={window.images.homepage_team} alt="" />
          </div>
        </div>

        <div className="how-it-works homepage-section">
          <h2>How it works</h2>
          <div className="cards-container">
            <div className="hiw-card">
              <div className="info">
                <img src={window.images.sign_up_logo} alt=""/>
                <h3>Sign Up</h3>
                <p>Create your free account and choose the plan that fits your needs.</p>
              </div>
            </div>

            <div className="hiw-card">
              <div className="info">
                <img src={window.images.new_note} alt="" />
                <h3>Add Content</h3>
                <p>Type notes, add attachments, clip web pages, or record memos.</p>
              </div>
            </div>

            <div className="hiw-card">
              <div className="info">
                <img src={window.images.search_image} alt="" />
                <h3>Find Everything</h3>
                <p>Organize your way. Use notebooks, tags, or our powerful search to find everything you need quickly.</p>
              </div>
            </div>      

            <div className="hiw-card">
              <div className="info">
                <img src={window.images.checkbox} alt="" />
                <h3>Get Things Done</h3>
                <p>Manage projects, take meeting notes, set reminders, and edit documents.</p>
              </div>
            </div>                   
          </div>
        </div>

      </div>

      <footer className="homepage-footer">
        A portfolio site by Micah Jaffe.
      </footer>
    </div>
  );
};

export default Home;

