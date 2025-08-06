import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * 80 * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-4 pb-32 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">🛍️ Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500 dark:text-gray-300 mt-20">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="empty" className="w-40 mb-4" />
          <p className="text-lg">Oops! Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow px-6 py-4 flex justify-between items-center z-50">
            <p className="text-xl font-semibold">Total: ₹{total}</p>
            <div className="space-x-2">
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.warning('Cart cleared!');
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <button
                onClick={() => toast.success('Proceeding to checkout 🚀')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
