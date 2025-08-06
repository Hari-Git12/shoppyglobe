import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b py-4 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="font-semibold dark:text-white">{item.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">₹{item.price * 80}</p>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700 font-semibold text-sm"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
