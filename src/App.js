import "./App.css";
import { Login } from "./utils";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = (e) => {
    setIsLoading(true);

    e.preventDefault();
    setError("");

    Login({ username, password })
      ? setIsLoggedIn(true)
      : setError("Incorrect username or password");
    setIsLoading(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <div className="login_container">
        {error && <p className="error">{error}</p>}

        {isLoggedIn ? (
          <>
            <h1>Hello, {username}!</h1>
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="submit" type="submit">
              {isLoading ? "Loading..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
