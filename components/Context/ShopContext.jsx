
// import { createContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import all_product from '../all_product';

// export const ShopContext = createContext(null);
// const getDefaultCart=()=>{
//   let cart ={};
//   for (let index = 0; index < all_product.length+1; index++) {
//     cart[index] =0;
    
//   }
//   return cart;
// }
// const ShopContextProvider = ( props) => {
//   const [cartItems,setCartItems] = useState(getDefaultCart())
  


// const addToCart= (itemId)=>{
// setCartItems((prev)=>({...prev,[itemId]:prev[itemId+1]}))
// console.log(cartItems);
// }
// const removeFromCart= (itemId)=>{
//   setCartItems((prev)=>({...prev,[itemId]:prev[itemId-1]}))
  
//   }
//   const contextValue = { all_product, cartItems,addToCart,removeFromCart };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// ShopContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ShopContextProvider;






import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import all_product from '../all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        totalAmount += itemInfo.new_price * cartItems[itemId];
      }
    }
    return totalAmount;
  }

  const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;

