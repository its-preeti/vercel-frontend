import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "./apiAuth";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      alert(res.data.message);

      // 🔥 redirect after register
      navigate("/"); // login page
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">
    
      <h2>Register Page</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
    </div>
  );
}

export default Register;