import React from 'react'; // Ensure React is imported
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const query = event.target.value.trim(); // Remove unnecessary spaces
        dispatch(productSearch(query));
    };

    return (
        <div className="header">
            <Link to="/"><h1 className='logo'>E-Commerce</h1></Link>
            <div className='search-box'>
                <input 
                    type='text' 
                    onChange={handleSearch} 
                    placeholder='Search product' 
                />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    );
};

export default Header;
