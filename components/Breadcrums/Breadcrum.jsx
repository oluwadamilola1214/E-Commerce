import PropTypes from 'prop-types';
import './Breadcrum.css';
import arrow_icon from '../../src/assets/newcollection.jpg/arrow.png'
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="Arrow" /> SHOP <img src={arrow_icon} alt="Arrow" /> {product.category} <img src={arrow_icon} alt="Arrow" /> {product.name}
    </div>
  );
};

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrum;
