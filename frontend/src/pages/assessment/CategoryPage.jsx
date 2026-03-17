import { useNavigate } from "react-router-dom";

const categories = [
  "analytical",
  "creative",
  "social",
  "leadership",
  "technical",
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Choose Assessment Category
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {categories.map((category) => (
            <div
              key={category}
              onClick={() => navigate(`/assessment/${category}`)}
              className="bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition"
            >
              <h2 className="text-lg font-medium capitalize text-gray-800">
                {category}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Start {category} assessment
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;