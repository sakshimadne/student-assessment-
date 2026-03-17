import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import API from "../../api/axiosInstance";

const ResultPage = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

 

  const fetchResult = async () => {
  try {
    const res = await API.get("/results/my-result");

    console.log("RESULT DATA:", res.data); // 👈 DEBUG

    setResult(res.data);
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
  }
};
 useEffect(() => {
    fetchResult();
  }, []);
  
 if (!result) {
  return (
    <div className="p-10 text-center">
      Loading results...
    </div>
  );
}

  const { scores, recommendedCareers, insights } = result;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Your Assessment Result 🎯
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Based on your responses, here is your career analysis
            </p>
          </div>

          {/* SCORES */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Strengths
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

              {Object.entries(scores).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white p-5 rounded-xl shadow-sm border"
                >
                  <p className="text-sm text-gray-500 capitalize">
                    {key}
                  </p>

                  <h3 className="text-2xl font-semibold text-indigo-600 mt-1">
                    {value}%
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CAREERS */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recommended Careers 🚀
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

              {recommendedCareers.map((career, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {career}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Matches your strengths and interests
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* INSIGHTS */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Insights 💡
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {Object.entries(insights).map(([key, text]) => (
                <div
                  key={key}
                  className="bg-white p-5 rounded-xl border shadow-sm"
                >
                  <h3 className="text-sm font-medium text-indigo-600 capitalize">
                    {key}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* ACTION */}
          <div className="flex justify-between items-center mt-10">

            <button
              onClick={() => navigate("/assessment")}
              className="text-sm text-gray-500 hover:text-indigo-600"
            >
              ← Retake Test
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
            >
              Go to Dashboard
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default ResultPage;