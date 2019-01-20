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
            <li><a href="https://www.linkedin.com/in/micah-jaffe/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://github.com/micah-jaffe/"><i className="fab fa-github"></i> Github</a></li>
            <li><a href="https://micah-jaffe.com"><i className="fas fa-home"></i> Portfolio</a></li>
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
              Protect your data without the effort
            </h1>
            <p>
              Caesarnote is a cryptographic cloud-based note-taking app that uses state-of-the-art algorithms to keep your data safe.
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

        <div className="homepage-footer">
          <div className="logo-with-text align-middle">
            <a href="/">
              <img className="logo" src={window.images.logo} />
              <h1>Caesarnote</h1>
            </a>
          </div>

          <div className="footer-links-container">
            <div className="footer-block">
              <h3>Product</h3>
              <p>Why Caesarnote</p>
              <p>Caesarnote Basic</p>
              <p>Caesarnote Premium</p>
              <p>Caesarnote Business</p>
              <p>Compare Plans</p>
              <p>Student Discount</p>
              <p>Download App</p>
            </div>

            <div className="footer-block">
              <h3>Features</h3>
              <p>Web Clipper</p>
              <p>Templates</p>
              <p>Spaces</p>
              <p>Integrations</p>
              <p>Notes Sync</p>
              <p>PDF &amp; Doc Search</p>
              <p>Search Handwriting</p>
              <p>Document Scanning</p>
              <p>Notebooks and Tags</p>
            </div>

            <div className="footer-block">
              <h3>Community</h3>
              <p>Our Community</p>
              <p>Certified Consultants</p>
              <p>Developers</p>
              <p>Events</p>
              <p>Forum</p>
            </div>

            <div className="footer-block">
              <h3>Support</h3>
              <p>Help &amp; Learning</p>
              <p>Troubleshooting</p>
              <p>Blog</p>
            </div>

            <div className="footer-block">
              <h3>Company</h3>
              <p>About Us</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Inclusion &amp; Diversity</p>
              <p>Contact Us</p>
            </div>

          </div>

          <footer className="self-promotion">
            A portfolio site by <a href="https://www.linkedin.com/in/micah-jaffe/">Micah Jaffe</a>
          </footer>
          
        </div>

      </div>
     
    </div>
  );
};

export default Home;

