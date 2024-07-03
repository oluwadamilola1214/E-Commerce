import './Footer.css';
import LOGO from '../../src/assets/images/logo.jpg';
import instagram from '../../src/assets/images/instagram.jpg';
import whatsapp from '../../src/assets/images/whatsapp.jpg';
import twitter from '../../src/assets/images/twitter.png';
import pintester from '../../src/assets/images/pintester.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={LOGO} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <img src={instagram} alt="" />
        </div> 
        <div className='footer-icons-container'>
          <img src={whatsapp} alt="" />
        </div>
        <div className='footer-icons-container'>
          <img src={twitter} alt="" />
        </div>
        <div className='footer-icons-container'>
          <img src={pintester} alt="" />
        </div>   
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright@ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
