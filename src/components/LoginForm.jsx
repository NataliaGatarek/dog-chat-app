import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // username / password => chat engine -> give messages
    //Ok ->logged in
    //!Ok -> error
    const authObject = {
      "Project-ID": "585c8755-6787-4b2d-92e1-5a4a0ed00488",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Incorrect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="from">
        <h1 className="title">Welcome</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Chat now</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
