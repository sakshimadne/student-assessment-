import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const DashboardPage = () => {
  const navigate = useNavigate();
const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-6">

        {/* Heading */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Discover your strengths and ideal career path
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="assessment"
            className="h-48 w-full object-cover"
          />

          {/* Content */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Career Assessment Test
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Answer a few questions to find the best career path for you.
            </p>

            <button
              onClick={() => navigate("/assessment")}
              className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
            >
              Start Assessment
            </button>
          </div>
        </div>

        {/* Secondary Action */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
          <div>
            <h3 className="text-gray-800 font-medium">
              View Your Result
            </h3>
            <p className="text-sm text-gray-500">
              Check your previous assessment result
            </p>
          </div>

          <button
            onClick={() => navigate("/result")}
            className="text-indigo-600 font-medium text-sm hover:underline"
          >
            View →
          </button>
        </div>
{user?.role === "admin" && (
  <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center border border-gray-200">
    
    <div>
      <h3 className="text-gray-800 font-medium">
        Admin Panel
      </h3>
      <p className="text-sm text-gray-500">
        Manage questions for assessment
      </p>
    </div>

    <button
      onClick={() => navigate("/admin/add-question")}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
    >
      Add Question
    </button>

  </div>
)}
      </div>
    </div>
  );
};

export default DashboardPage;