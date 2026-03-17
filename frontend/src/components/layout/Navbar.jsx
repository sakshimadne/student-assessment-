import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-white/80 backdrop-blur border-b px-8 py-3 flex justify-between items-center sticky top-0 z-50"
    >
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold text-gray-800">
          Career<span className="text-indigo-600">AI</span>
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-500">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span className="hover:text-indigo-600 cursor-pointer">Assessment</span>
          <span className="hover:text-indigo-600 cursor-pointer">Results</span>
        </div>
      </div>

      {/* RIGHT */}
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