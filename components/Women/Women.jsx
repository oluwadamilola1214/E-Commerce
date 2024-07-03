import './Women.css'; // Import the CSS file
import product1 from '../../src/assets/images/newcollection.jpg/144.jpg'
import product2 from '../../src/assets/images/newcollection.jpg/142.jpg';
import product3 from '../../src/assets/images/newcollection.jpg/150.jpg'
import product4 from '../../src/assets/images/newcollection.jpg/149.jpg'
import product5 from '../../src/assets/images/newcollection.jpg/148.jpg'
import product6 from '../../src/assets/images/newcollection.jpg/145.jpg'


const Women = () => {
  return (
    <div className="women-page">
      <h1>Welcome to the Women Section</h1>
      <p>Discover our exclusive range of womens products.</p>
      
      <div className="product-gallery">
        <div className="product-item">
          <img src={product1} alt="Product 1" />
          <p>Product 1 Description</p>
        </div>
        <div className="product-item">
          <img src={product2} alt="Product 2" />
          <p>Product 2 Description</p>
        </div>
        <div className="product-item">
          <img src={product3} alt="Product 2" />
          <p>Product 2 Description</p>
        </div>
        <div className="product-item">
          <img src={product4} alt="Product 2" />
          <p>Product 2 Description</p>
        </div>
        <div className="product-item">
          <img src={product5} alt="Product 2" />
          <p>Product 2 Description</p>
        </div>
        <div className="product-item">
          <img src={product6} alt="Product 2" />
          <p>Product 2 Description</p>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
}

export default Women;
