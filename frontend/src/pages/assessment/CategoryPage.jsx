import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { motion } from "framer-motion";

const categories = [
  { name: "analytical", color: "from-indigo-500 to-blue-500", icon: "📊" },
  { name: "creative", color: "from-pink-500 to-purple-500", icon: "🎨" },
  { name: "social", color: "from-green-500 to-teal-500", icon: "🤝" },
  { name: "leadership", color: "from-yellow-500 to-orange-500", icon: "👑" },
  { name: "technical", color: "from-gray-700 to-gray-900", icon: "💻" },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-10">

  
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Choose Your Assessment 🎯
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Select a category to begin your personalized career analysis
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold">
              Discover Your True Potential 🚀
            </h2>
            <p className="text-sm mt-2 opacity-90">
              Each category evaluates a different dimension of your personality and skills.
            </p>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/assessment/${category.name}`)}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden">

                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />

               
                  <div className="text-3xl mb-4">
                    {category.icon}
                  </div>

                  <h2 className="text-lg font-semibold capitalize text-gray-800 group-hover:text-indigo-600 transition">
                    {category.name}
                  </h2>

          
                  <p className="text-sm text-gray-500 mt-2">
                    Start your {category.name} assessment and unlock insights.
                  </p>

                  <div className="mt-4 text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition">
                    Start Now →
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800">🧠 Smart Analysis</h3>
              <p className="text-sm text-gray-500 mt-1">
                AI-driven insights based on your answers.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800">📊 Detailed Results</h3>
              <p className="text-sm text-gray-500 mt-1">
                Get strengths, weaknesses, and career matches.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800">🚀 Career Guidance</h3>
              <p className="text-sm text-gray-500 mt-1">
                Discover the best career path for you.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default CategoryPage;