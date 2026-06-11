import { Link } from "react-router-dom";

function ForgotPassword() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Button Clicked");
  };
  return (
    < form on onSubmit={handleLogin}>
    <div className= "container">
      <h2>Forgot Password page </h2>

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <button type="submit">Send Reset Link</button>

      <p><Link to="/">Back to Login</Link></p>
    </div>
    </form>
  );
}

export default ForgotPassword;