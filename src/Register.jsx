import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "./apiAuth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        email,
        password,
      });

      alert(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="container">
        <h2>Register Page</h2>

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

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </form>
  );
}

export default Register;