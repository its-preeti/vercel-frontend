import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className= "container">
      <h2>Forgot Password page </h2>

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <button>Send Reset Link</button>

      <p><Link to="/">Back to Login</Link></p>
    </div>
  );
}

export default ForgotPassword;