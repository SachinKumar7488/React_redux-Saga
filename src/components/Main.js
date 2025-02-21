import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())} style={{color:'green'}}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img
              src={item.Photo}
              alt=""
              style={{ width: "100px", height: "auto" }} 
            />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} style={{color: 'blue'}}>Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))} style={{color: 'red'}}>Remove to Cart</button>

            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;