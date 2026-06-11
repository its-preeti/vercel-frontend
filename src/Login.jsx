import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./apiAuth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        email,
        password,
      });

      alert(res.data.message);
      console.log(res.data);

      // 🔥 redirect after successful login
      navigate("/register"); 
      // 👉 better: navigate("/home") or "/dashboard"
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>

        <p>
          <Link to="/forgot">Forgot Password?</Link>
        </p>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;