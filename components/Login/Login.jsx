

const Login = () => {
  const handleLogin = () => {
    // Logic to handle login
    console.log('Logging in...');
  };

  return (
    <>
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Your Email Address" />
        <input type="password" placeholder="Enter Your Password" />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p className="loginsignup-login">
        Dont have an account? <span>Sign Up Here</span>
      </p>
    </>
  );
};

export default Login;
