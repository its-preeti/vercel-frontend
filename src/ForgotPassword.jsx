import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "./apiAuth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await forgotPassword({
        email,
      });

      alert(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Request Failed");
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <div className="container">
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Send Reset Link</button>

        <p>
          <Link to="/">Back to Login</Link>
        </p>
      </div>
    </form>
  );
}

export default ForgotPassword;