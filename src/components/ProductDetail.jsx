import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-7093763-5745286.png"
          alt="error"
          className="w-60 mx-auto mb-4"
        />
        <p>Sorry! Product not found or network error.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-gray-800 text-black dark:text-white shadow rounded-lg p-6 transition-all duration-300 animate-fade-in">
        <div className="flex-1">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <span className="text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 px-2 py-1 rounded-full uppercase font-medium tracking-wide">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">(1.2k reviews)</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-base">{product.description}</p>

          <p className="text-2xl font-bold text-green-600">₹{product.price * 80}</p>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.title} added to cart!`);
            }}
            className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
  