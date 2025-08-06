import React from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/searchSlice';

function ProductList() {
  const { products, error } = useFetchProducts();
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search products..."
          className="w-full px-5 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg shadow-sm text-sm"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
