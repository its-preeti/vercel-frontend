import { Link } from "react-router-dom";

function Register() {
  return (
    <div className= "container">
      <h2>Register page </h2>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="forgotpassword" placeholder="Password" />
      <br /><br />

      <button>Register</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;

  