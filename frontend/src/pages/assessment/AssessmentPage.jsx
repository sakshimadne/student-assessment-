import { useEffect, useState } from "react";
import { getQuestions, submitAnswers } from "../../api/questionApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useParams } from "react-router-dom";

const AssessmentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

const { category } = useParams();



useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    try {
      const data = await getQuestions(category);
      if (isMounted) {
        setQuestions(data);
        setCurrent(0);    
        setAnswers({});    
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, [category]);

useEffect(() => {
  if (!category) {
    navigate("/assessment");
  }
}, [category, navigate]);

const handleAnswer = (value) => {
  setAnswers((prev) => ({
    ...prev,
    [question._id]: value,
  }));
};

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) { 
      setCurrent(current - 1);
    }
  };


const handleSubmit = async () => {
  console.log("SUBMIT CLICKED");

  try {

    const formattedAnswers = Object.keys(answers).map((questionId) => ({
      questionId,
      value: answers[questionId],
    }));

    console.log("Formatted Answers:", formattedAnswers);

   const res = await submitAnswers(formattedAnswers);

console.log("SUBMIT RESPONSE:", res);

navigate("/result");

  } catch (error) {
    console.log(error);
  }
};

 if (!questions.length || !questions[current]) {
  return <div className="p-10 text-center">Loading...</div>;
}
const question = questions[current];

const progress = ((current + 1) / questions.length) * 100;
 
return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-10 relative overflow-hidden">


      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

      
        <div className="space-y-6 hidden md:block">

          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Career Assessment 🚀
            </h1>
            <p className="text-gray-600 mt-2">
              Discover your personality, strengths, and ideal career path.
            </p>
          </div>

        
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border">
            <h3 className="font-semibold text-gray-800 mb-3">
              How to answer
            </h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Be honest with your responses</li>
              <li>• Don’t overthink — go with instinct</li>
              <li>• Every answer shapes your result</li>
            </ul>
          </div>

     
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

      
          <div className="bg-white p-5 rounded-2xl shadow-md border">
            <p className="text-sm text-gray-500 mb-2">
              Response Scale
            </p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Disagree</span>
              <span>Neutral</span>
              <span>Agree</span>
            </div>
          </div>

        </div>


        <div className="w-full max-w-xl mx-auto">

          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border relative">

    
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-purple-400 opacity-20 blur-2xl rounded-full"></div>

   
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">
                Question {current + 1} / {questions.length}
              </p>

              <span className="text-xs bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full shadow">
                {category}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-snug">
              {question.questionText}
            </h2>

     
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

              {question.options?.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className={`p-4 rounded-xl border text-sm text-left transition-all duration-300 transform
                    ${
                      answers[question._id] === opt.value
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-[1.05] shadow-lg border-none"
                        : "bg-white hover:bg-indigo-50 hover:border-indigo-400 hover:scale-[1.02]"
                    }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

         
            <div className="flex justify-between items-center">

              <button
                onClick={prev}
                disabled={current === 0}
                className="px-4 py-2 bg-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-300 transition"
              >
                ← Previous
              </button>

              {current === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!answers[question._id]}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm hover:scale-110 transition disabled:opacity-50 shadow-lg"
                >
                  Submit 🚀
                </button>
              ) : (
                <button
                  onClick={next}
                  disabled={!answers[question._id]}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm hover:scale-110 transition disabled:opacity-50 shadow-lg"
                >
                  Next →
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  </>
);
};

export default AssessmentPage;