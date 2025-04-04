import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Icons for search and cart
import './Header.css'; // Import the CSS file

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value.trim(); // Remove unnecessary spaces
    dispatch(productSearch(query));
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Tech Store</h1>
        </Link>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search products..."
            className="search-input"
          />
        </div>

        <Link to="/cart" className="cart-link">
          <div className="cart-div">
            <FaShoppingCart className="cart-icon" />
            {result.length > 0 && <span className="cart-count">{result.length}</span>}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;