import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import API from "../../api/axiosInstance";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
const ResultPage = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

 

  const fetchResult = async () => {
  try {
    const res = await API.get("/results/my-result");

    console.log("RESULT DATA:", res.data); 

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
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">


        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border text-center space-y-6 relative z-10">

       
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Analyzing your results...
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Please wait while we generate your career insights
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

 const {
  scores = {},
  recommendedCareers = [],
  insights = {},
} = result;

return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-10 relative overflow-hidden">


      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">


        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-3xl font-bold">
            Your Assessment Result 🎯
          </h1>
          <p className="text-sm mt-2 opacity-90">
            Based on your responses, here is your personalized career analysis
          </p>
        </div>

  
<div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow-xl border">

  <h2 className="text-xl font-semibold text-gray-800 mb-6">
    Performance Overview 📊
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-center">


    <div className="w-full h-[300px]">

      <ResponsiveContainer>
        <RadarChart
          data={Object.entries(scores).map(([key, value]) => ({
            category: key,
            score: value,
          }))}
        >
          <PolarGrid stroke="#e5e7eb" />

          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <PolarRadiusAxis
            domain={[0, 100]}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
          />

          <Radar
            dataKey="score"
            stroke="#6366f1"
            fill="#8b5cf6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>

    </div>

    <div className="space-y-5">


      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-xl shadow">
        <p className="text-xs opacity-80">Top Strength</p>
        <h3 className="text-lg font-semibold capitalize">
          {Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0]}
        </h3>
      </div>

      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <p className="text-xs text-gray-500">Needs Improvement</p>
        <h3 className="text-lg font-semibold capitalize text-gray-800">
          {Object.entries(scores).sort((a, b) => a[1] - b[1])[0]?.[0]}
        </h3>
      </div>

      <div className="text-sm text-gray-500 leading-relaxed">
        This chart represents your personality distribution across different
        dimensions. Focus on improving weaker areas while leveraging your
        strengths for better career alignment.
      </div>

    </div>

  </div>

</div>

     
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Strengths 💪
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {Object.entries(scores).map(([key, value]) => (
              <div
                key={key}
                className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow-lg border hover:shadow-xl transition"
              >
                <p className="text-sm text-gray-500 capitalize">
                  {key}
                </p>

                <h3 className="text-3xl font-bold text-indigo-600 mt-1">
                  {value}%
                </h3>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

   
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recommended Careers 🚀
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {recommendedCareers.length > 0 ? (
              recommendedCareers.map((career, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-lg border transition hover:scale-[1.02]
                    ${
                      index === 0
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        : "bg-white"
                    }`}
                >
                  <h3 className="text-lg font-semibold">
                    {career}
                  </h3>

                  <p className={`text-sm mt-2 ${
                    index === 0 ? "text-white/80" : "text-gray-500"
                  }`}>
                    {index === 0
                      ? "🏆 Best match for your profile"
                      : "Matches your strengths and interests"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm col-span-full">
                No career recommendations yet.
              </p>
            )}

          </div>
        </div>

   
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Insights 💡
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {Object.entries(insights).map(([key, text]) => (
              <div
                key={key}
                className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition"
              >
                <h3 className="text-sm font-semibold text-indigo-600 capitalize">
                  {key}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>

      
        <div className="flex justify-between items-center mt-10">

          <button
            onClick={() => navigate("/assessment")}
            className="text-sm text-gray-500 hover:text-indigo-600"
          >
            ← Retake Test
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl text-sm hover:scale-105 transition shadow-lg"
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