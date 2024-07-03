import  { useState } from 'react';
import './LoginSignup.css';
import Login from '../../../components/Login/Login';

const LoginSignup = () => {
  
  const [signedUp, setSignedUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSignup = () => {
    // Basic validation
    if (!name || !email || !password || !termsAgreed) {
      alert('Please fill out all fields and agree to terms.');
      return;
    }

    // Logic to handle signup, set signedUp to true upon successful signup
    setSignedUp(true);
  };

  const handleLoginHereClick = () => {
    // Direct user to login page
    // You can use React Router or any other routing mechanism here
    console.log('Navigate to login page');
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {signedUp ? (
          <Login /> // Show Login component if signedUp is true
        ) : (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignup}>Continue</button>
            <p className="loginsignup-login">
              Already have an account?{' '}
              <span onClick={handleLoginHereClick} className="login-link">
                Login Here
              </span>
            </p>
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
              />
              <p>
                By continuing, I agree to the terms of use and privacy policy
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
