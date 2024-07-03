import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../src/assets/logo.jpg';
import Cart_icon from '../src/assets/cart_icon.png';
import { ShopContext } from './Context/ShopContext';

const Navbar = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext); // Accessing cartItems from ShopContext

  const [menu, setMenu] = useState("shop");

  // Function to calculate total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      totalItems += cartItems[itemId];
    }
    return totalItems;
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>SHOPPER</p>
        </Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop'); }}>
          <Link style={{textDecoration:"none"}} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('mens'); }}>
          <Link style={{textDecoration:"none"}} to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('womens'); }}>
          <Link style={{textDecoration:"none"}} to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('kids'); }}>
          <Link style={{textDecoration:"none"}} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={Cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div> {/* Displaying total cart items */}
      </div>
    </div>
  );
}

export default Navbar;
