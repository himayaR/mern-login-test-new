import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
        email
      });
      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  };

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      username,
      password,
      email
    });
    alert("User registered");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Login;