import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      console.log("API Response:", res.data);

      if (res.data.success) {
        const token = res.data.result.token;

        if (token) {
          sessionStorage.setItem("token", token);
          console.log("Success token", token);
          navigate("/admin/dashboard");
        } else {
          console.error("Token not found in response result");
          alert("Login successful but token is missing!");
        }
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full mx-auto bg-gray-100">
      <h1 className="text-6xl font-bold uppercase p-4">Welcome To MUDITA SPA</h1>
      <div className="h-[600px] bg-gray-100 w-full grid lg:grid-cols-2 justify-center items-center max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="bg-blue-400 h-[600px] flex items-center justify-between ">
          <form
            onSubmit={handleLogin}
            className="bg-blue-500 shadow-lg rounded-lg p-8 w-[600px] mx-auto h-[400px] flex flex-col justify-between"
          >
            <h1 className="text-7xl font-bold text-center mb-6 text-white">Admin Login</h1>

            <div className="mb-4 text-white">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="admin@example.com"
              />
            </div>

            <div className="mb-6 text-white">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="******"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-50 bg-white  text-black py-2 rounded hover:bg-gray-700 hover:text-white  transition cursor-pointer"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="w-full h-full overflow-hidden">
          <img src="https://www.pestana.com/en/spa/magic-spa/_jcr_content/root/container/activities_and_desti_685702673/activities-and-destinations-container/activities_and_desti_1303693319/activities-and-destinations-image.coreimg.jpeg/1746005815581/pestana-spa-assinature-rituals-aroma-facials.jpeg" alt="" className="w-full  object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Login;
