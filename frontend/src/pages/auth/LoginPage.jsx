import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await loginUser(formData);

      login(data);
      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 relative overflow-hidden">

    {/* BACKGROUND BLOBS */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">

      {/* LEFT SIDE (BRANDING) */}
      <div className="hidden md:block space-y-6">

        <h1 className="text-4xl font-bold text-gray-800">
          Career<span className="text-indigo-600">AI</span> 🚀
        </h1>

        <p className="text-gray-600 text-lg">
          Discover your strengths, personality, and the perfect career path using intelligent assessments.
        </p>

        {/* FEATURES */}
        <div className="space-y-4 text-sm text-gray-600">

          <div className="flex items-center gap-3">
            <span className="text-indigo-600">✔</span>
            AI-based career recommendations
          </div>

          <div className="flex items-center gap-3">
            <span className="text-indigo-600">✔</span>
            Psychometric assessment analysis
          </div>

          <div className="flex items-center gap-3">
            <span className="text-indigo-600">✔</span>
            Personalized insights & reports
          </div>

        </div>

      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border">

        {/* HEADER */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back 👋
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Login to continue your journey
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition shadow-lg disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 cursor-pointer hover:underline font-medium"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  </div>
);
};

export default LoginPage;