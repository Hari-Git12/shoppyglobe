import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector((state) => state.cart);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="bg-blue-700 dark:bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">🛒 ShoppyGlobe</Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="relative hover:underline">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs px-2 py-0.5 animate-pulse">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* 🌗 Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 border border-white px-2 py-1 rounded-full hover:bg-white hover:text-black transition text-xs"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
