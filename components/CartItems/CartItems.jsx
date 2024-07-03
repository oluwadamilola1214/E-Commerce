import { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import removeIcon from '../../src/assets/images/newcollection.jpg/cross icon.jpg';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [checkoutStatus, setCheckoutStatus] = useState(null);
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeMessage, setPromoCodeMessage] = useState('');

    const subtotal = () => {
        let total = 0;
        all_product.forEach((product) => {
            if (cartItems[product.id] > 0) {
                total += product.new_price * cartItems[product.id];
            }
        });
        return total;
    };

    const handleCheckout = () => {
        if (subtotal() > 0) {
            setCheckoutStatus('Checkout Successful');
        } else {
            setCheckoutStatus('You have not purchased anything');
        }
    };

    const handlePromoCodeSubmit = () => {
        // Example validation logic for promo code
        if (promoCode === 'VALIDCODE') {
            setPromoCodeMessage('Promo code submitted successfully');
            // Apply promo code logic here if needed
        } else {
            setPromoCodeMessage('Invalid promo code');
        }
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    const itemTotal = e.new_price * cartItems[e.id];
                    const total = isNaN(itemTotal) ? e.new_price : itemTotal;

                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${total}</p>
                                <img className='cartitems-remove-icon' src={removeIcon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                    {checkoutStatus && <p>{checkoutStatus}</p>}
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input
                            type="text"
                            placeholder="promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button onClick={handlePromoCodeSubmit}>Submit</button>
                    </div>
                    {promoCodeMessage && <p>{promoCodeMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default CartItems;
