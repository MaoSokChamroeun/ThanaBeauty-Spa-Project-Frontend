import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-5">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
      <div className="bg-white px-2 text-sm rounded rotate-12 absolute border border-blue-600">
        Page Not Found
      </div>
      <p className="text-gray-500 mt-5 text-lg">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;