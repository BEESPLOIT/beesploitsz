import { useState } from "react";

export default function Beesploitz() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      style={{
        background: "#111",
        color: "#FFD700",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      {!loggedIn ? (
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            background: "#1a1a1a",
            padding: "30px",
            borderRadius: "10px",
            border: "2px solid #FFD700",
          }}
        >
          <h1 style={{ textAlign: "center" }}>🐝 Beesploitz</h1>

          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
            }}
          />

          <button
            onClick={() => setLoggedIn(true)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              background: "#FFD700",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </button>
        </div>
      ) : (
        <div>
          <h1>🐝 Beesploitz Dashboard</h1>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#1a1a1a",
              borderRadius: "10px",
            }}
          >
            <h2>Welcome to Beesploitz</h2>
            <p>Your dashboard is now working.</p>
          </div>
        </div>
      )}
    </div>
  );
}
