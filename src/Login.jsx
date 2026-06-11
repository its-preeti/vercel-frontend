import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "./apiAuth";

function Login() {
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
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="container">
        <h2>Login page</h2>

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
      </div>
    </form>
  );
}

export default Login;