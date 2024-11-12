import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Optional for styling

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;