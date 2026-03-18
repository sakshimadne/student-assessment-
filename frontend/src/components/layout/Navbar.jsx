import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-white/80 backdrop-blur border-b px-8 py-3 flex justify-between items-center sticky top-0 z-50"
    >

      <div className="flex items-center gap-8">
        

        <h1
          onClick={() => navigate("/")}
          className="text-xl font-semibold text-gray-800 cursor-pointer"
        >
          Career<span className="text-indigo-600">AI</span>
        </h1>

    
        <div className="hidden md:flex gap-6 text-sm font-medium">

          <span
            onClick={() => navigate("/")}
            className={`cursor-pointer ${
              isActive("/") ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            Dashboard
          </span>

          <span
            onClick={() => navigate("/assessment")}
            className={`cursor-pointer ${
              isActive("/assessment") ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            Assessment
          </span>

          <span
            onClick={() => navigate("/result")}
            className={`cursor-pointer ${
              isActive("/result") ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            Results
          </span>

        </div>
      </div>


      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">{user?.name}</span>

        <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full text-sm">
          {user?.name?.charAt(0)}
        </div>

        <button
          onClick={logout}
          className="text-xs text-gray-500 hover:text-red-500"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;