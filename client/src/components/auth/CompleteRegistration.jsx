import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="container p-5">
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4>Register</h4>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
            disabled={loading}
          />
        </div>
        <button
          className="btn btn-raised btn-success"
          disabled={!email || loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompleteRegistration;
