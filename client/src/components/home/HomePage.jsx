import React from 'react';
import './HomePage.css'; // Create this file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">Free<span>lance</span>Hub</div>
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-buttons">
          <a href="/register" className="btn-primary">Register</a>
          <a href="/login" className="btn-outline">Log In</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Welcome to our Freelancer Platform</h1>
        <p>Find the best freelancers for your projects and get the job done efficiently.</p>
        <div className="cta-buttons">
          <a href="/register" className="btn-primary">Register</a>
          <a href="/login" className="btn-outline">Login</a>
        </div>
      </header>

      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <p className="subtitle">
          Read what our clients have to say about their experience working with freelancers on our platform.
        </p>
        <div className="testimonial-cards">
          <div className="card">
            <h4>John Doe</h4>
            <p className="role">CEO, ABC Company</p>
            <p>Working with freelancers on this platform has been a game-changer. The quality of work exceeded expectations.</p>
          </div>
          <div className="card">
            <h4>Jane Smith</h4>
            <p className="role">Marketing Manager, XYZ Inc.</p>
            <p>Perfect freelancer within minutes. Seamless communication and outstanding results.</p>
          </div>
          <div className="card">
            <h4>Sarah Williams</h4>
            <p className="role">Creative Director, LMN Agency</p>
            <p>Top-notch professionals. Exceptional results within tight deadlines. Will hire again!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
