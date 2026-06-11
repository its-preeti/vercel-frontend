import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { forgotPassword } from "./apiAuth";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await forgotPassword({ email });

      alert(res.data.message);

      // 🔥 after reset request
      navigate("/"); // login page
    } catch (error) {
      console.log(error);
      alert("Error in resetting password");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">
    
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Send Reset Link</button>
      </form>

      <p>
        Back to <Link to="/">Login</Link>
      </p>
    </div>
    </div>
  );
}

export default ForgotPassword;