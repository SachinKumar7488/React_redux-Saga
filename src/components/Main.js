import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Main.css'; // Import the CSS file
import { FaShoppingCart, FaTrash, FaPlus } from 'react-icons/fa'; // Icons for buttons

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div className="main-container">
      <header className="header">
        <h1>Tech Store</h1>
        <button 
          onClick={() => dispatch(emptyCart())} 
          className="empty-cart-btn"
        >
          <FaTrash className="icon" /> Empty Cart
        </button>
      </header>

      <div className="product-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="card-overlay">
              <img
                src={item.Photo}
                alt={item.name}
                className="product-image"
              />
              <div className="quick-actions">
                <button 
                  onClick={() => dispatch(addToCart(item))} 
                  className="action-btn add-btn"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-brand">{item.brand}</p>
              <div className="price-section">
                <span className="price">${item.price}</span>
                <button 
                  onClick={() => dispatch(removeToCart(item.id))}
                  className="cart-btn"
                >
                  <FaShoppingCart className="icon" /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;