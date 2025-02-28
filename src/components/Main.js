import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import './Main.css'; // Import the CSS file

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())} style={{ color: 'green' }}>
          Empty Cart
        </button>
      </div>
      <div className='product-container'>
        {data.map((item) => (
          <div className='product-item' key={item.id}>
            <img
              src={item.Photo}
              alt={item.name}
              className='product-image'
            />
            <div className='product-details'>
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: ${item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
            </div>
            <div className='product-actions'>
              <button onClick={() => dispatch(addToCart(item))} className='add-to-cart-btn'>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))} className='remove-from-cart-btn'>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;