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

//   const handleSubmit = async () => {
//     console.log("SUBMIT CLICKED"); // 👈 ADD
//     try {
//       await submitAnswers(answers);
//       navigate("/result");
//     } catch (error) {
//       console.log(error);
//     }
//   };
const handleSubmit = async () => {
  console.log("SUBMIT CLICKED");

  try {
    // ✅ Convert object → array (IMPORTANT FIX)
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

    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center justify-items-center">

        {/* LEFT PANEL */}
        <div className="space-y-6 hidden md:block animate-fade-in">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            Career Assessment
          </h1>

          <p className="text-gray-500 text-sm">
            Answer thoughtfully. Your responses help us understand your
            strengths and recommend the best career path.
          </p>

          <div className="bg-white p-5 rounded-xl shadow-sm border space-y-3">
            <p className="text-sm text-gray-700 font-medium">
              How to answer:
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Be honest with your responses</li>
              <li>• Don’t overthink — go with instinct</li>
              <li>• Each answer affects your result</li>
            </ul>
          </div>

          {/* Progress Indicator */}
          <div>
            <p className="text-xs text-gray-400 mb-2">
              Progress
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (MAIN CARD) */}
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border">

          {/* Question Count */}
          <p className="text-sm text-gray-500 mb-2">
            Question {current + 1} of {questions.length}
          </p>

          {/* Question */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-snug">
            {question.questionText}
          </h2>

          {/* Label */}
          <p className="text-xs text-gray-400 mb-3">
            Select your response:
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

            {question.options?.length > 0
              ? question.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className={`p-4 rounded-xl border text-sm text-left transition-all duration-200 transform
                      ${
                        answers[question._id] === opt.value
                          ? "bg-indigo-600 text-white border-indigo-600 scale-[1.02] shadow-md"
                          : "bg-white hover:border-indigo-400 hover:bg-gray-50 hover:scale-[1.01]"
                      }`}
                  >
                    {opt.text}
                  </button>
                ))

              : [1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleAnswer(num)}
                    className={`py-2 rounded-lg border ${
                      answers[question._id] === num
                        ? "bg-indigo-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {num}
                  </button>
                ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">

            <button
              onClick={prev}
              disabled={current === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-300 transition"
            >
              Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!answers[question._id]}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50"
              >
                Submit
              </button>
            ) : (
              <button
  onClick={next}
  disabled={!answers[question._id]}
  className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50"
>
  Next
</button>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default AssessmentPage;