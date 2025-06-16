import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to MyFreelancer.com</h1>
      <p>Browse freelance projects or log in to post/bid.</p>
      <div className="d-flex gap-3 mt-4">
        <a href="/login" className="btn btn-primary">Login</a>
        <a href="/register" className="btn btn-outline-primary">Register</a>
      </div>
    </div>
  );
};

export default HomePage;