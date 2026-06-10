import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container"> 
      <h2>Login page</h2>

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Login</button>

      <p><Link to="/forgot">Forgot Password?</Link></p>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;


      