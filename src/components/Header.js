import { useSelector } from 'react-redux'

const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <div className="header" style={{ fontSize: "30px", color: 'white', justifyContent: 'space-between',fontFamily: 'Inter' }}>
            E-COMMERCE
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
        </div>
    )
}

export default Header;