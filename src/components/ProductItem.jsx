import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 animate-fade-in">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <span className="text-xs bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200 px-2 py-0.5 rounded-full mb-2 inline-block">
            Category: {product.category}
          </span>
          <h3 className="text-lg font-semibold truncate">{product.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 h-10 overflow-hidden">{product.description}</p>
          <p className="text-blue-600 dark:text-blue-400 font-bold mt-1 text-right">₹{product.price * 80}</p>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-2 rounded-b-xl"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
