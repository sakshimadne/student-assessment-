import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const categories = [
  "analytical",
  "creative",
  "social",
  "leadership",
  "technical"
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 px-6 py-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Choose Assessment Category
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Select a category to start your personalized assessment
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => navigate(`/assessment/${cat}`)}
                className="bg-white p-6 rounded-2xl shadow-md border cursor-pointer hover:shadow-lg transition"
              >
                <h2 className="text-lg font-medium capitalize text-gray-800">
                  {cat}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Explore your {cat} skills
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default CategoryPage;