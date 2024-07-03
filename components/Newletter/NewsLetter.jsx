import{ useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = () => {
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setSuccessMessage('Subscribed successfully');
    } else {
      setSuccessMessage('Please enter a valid email address');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default NewsLetter;
