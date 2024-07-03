import './ProductDisplay.css';
import PropTypes from 'prop-types';
import Star from '../../src/assets/images/newcollection.jpg/star.jpg'
import dull from '../../src/assets/images/newcollection.jpg/dull icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';


const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  
  const { image, name, old_price, new_price } = product;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* <img src={image} alt="product" /> */}
          {/* <img src={image} alt="product" />
          <img src={image} alt="product" />
          <img src={image} alt="product" /> */}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={image} alt={name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">${old_price}</div>
          <div className="productdisplay-right-prices-new">${new_price}</div>
        </div>
        <div className="productdisplay-right-star">
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <img src={dull} alt="Dull Star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-description">
          Adds a touch of classic elegance.
        </div>
        <div className="productdisplay-right-size">
          <h1><b>Select Size</b></h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() =>{ addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired, // Ensure 'id' is also validated
  }).isRequired,
};

export default ProductDisplay;
