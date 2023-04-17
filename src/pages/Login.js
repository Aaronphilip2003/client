import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Popup from "./Popup";
import Blog from "../images/Blog.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:8080/auth", {
      username,
      password,
    });

    if (response.data === "Login Successful") {
      navigate("/main");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <img src={Blog} alt="" className="image" />
      <h2 className="header">Pin Your Thoughts!</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <Popup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          title="Error"
          actions={[
            {
              label: "Close",
              color: "primary",
              onClick: () => setShowPopup(false),
            },
          ]}
        >
          <div>Username / Password does not match!</div>
        </Popup>
      </div>
    </div>
  );
};

export default Login;
