import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../components/layout/Navbar";
const DashboardPage = () => {
  const navigate = useNavigate();
const { user } = useAuth();
return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">

      
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Discover your strengths and ideal career path
          </p>
        </div>

    
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

          <div className="absolute bottom-6 left-6 text-white max-w-md">
            <h2 className="text-2xl font-semibold">
              Career Assessment Test
            </h2>
            <p className="text-sm mt-2 opacity-90">
              Answer a few smart questions to discover your perfect career path.
            </p>

            <button
              onClick={() => navigate("/assessment")}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition"
            >
              Start Assessment 🚀
            </button>
          </div>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <p className="text-xs text-gray-500">Tests Taken</p>
            <h3 className="text-xl font-bold text-indigo-600 mt-1">3</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <p className="text-xs text-gray-500">Top Skill</p>
            <h3 className="text-xl font-bold text-purple-600 mt-1">Logic</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <p className="text-xs text-gray-500">Best Match</p>
            <h3 className="text-xl font-bold text-pink-600 mt-1">Developer</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <p className="text-xs text-gray-500">Progress</p>
            <h3 className="text-xl font-bold text-green-600 mt-1">75%</h3>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6">

      
          <div className="bg-white rounded-2xl p-6 shadow-md border flex justify-between items-center">
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">
                View Your Result
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Check your previous assessment result
              </p>
            </div>

            <button
              onClick={() => navigate("/result")}
              className="text-indigo-600 font-medium hover:underline"
            >
              View →
            </button>
          </div>

    
          {user?.role === "admin" && (
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">
                  Admin Panel
                </h3>
                <p className="text-sm opacity-80">
                  Manage questions for assessment
                </p>
              </div>

              <button
                onClick={() => navigate("/admin/add-question")}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm"
              >
                Add Question
              </button>
            </div>
          )}
        </div>

     
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <h3 className="text-lg font-semibold mb-4">
              Your Progress 📈
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Assessment Completion</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div className="bg-indigo-600 h-2 rounded-full w-[75%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Profile Strength</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div className="bg-purple-600 h-2 rounded-full w-[60%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <h3 className="text-lg font-semibold mb-4">
              Recent Activity 🕒
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Completed Assessment</span>
                <span className="text-gray-400">2 days ago</span>
              </div>

              <div className="flex justify-between">
                <span>Viewed Results</span>
                <span className="text-gray-400">1 day ago</span>
              </div>

              <div className="flex justify-between">
                <span>Updated Profile</span>
                <span className="text-gray-400">Today</span>
              </div>
            </div>
          </div>
        </div>

   
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            💡 Career Tip
          </h3>

          <p className="text-sm opacity-90">
            Based on your interests, focus on improving problem-solving and communication skills.
          </p>
        </div>

      </div>
    </div>
  </>
);
};

export default DashboardPage;