
import { useNavigate } from 'react-router-dom';
import exclusive_image from '../../src/assets/images/newcollection.jpg/149.jpg';
import './Offers.css'; // Ensure the correct path to your CSS file

const Offers = () => {
  const navigate = useNavigate();

  const handleCheckNowClick = () => {
    navigate('/women'); // Navigate to the "Women" page
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleCheckNowClick}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
