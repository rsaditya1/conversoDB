// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css"; // Add styles as needed

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://your-backend-api.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard"); 
//       } else {
//         setError(data.message || "Invalid username or password.");
//       }
//     } catch (error) {
//       setError("Unable to connect to the server. Please try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>ConversoDB - Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
