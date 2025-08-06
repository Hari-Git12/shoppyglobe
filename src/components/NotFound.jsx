import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
