import { useContext } from 'react';
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css';
import {ShopContext} from '../../components/Context/ShopContext'
// import drop_down from '../assets/images/newcollection.jpg/dropdown_icon.png'; // Correct path for drop_down icon
import Item from '../../components/item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-12</span> out of 20 products  
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt="Sort Dropdown Icon" />
        </div> */}
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.Category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

// Define prop types for validation
ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default ShopCategory;
