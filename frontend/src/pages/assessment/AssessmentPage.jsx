import { useEffect, useState } from "react";
import { getQuestions, submitAnswers } from "../../api/questionApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const AssessmentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [questions[current]._id]: value,
    });
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
    try {
      await submitAnswers(answers);
      navigate("/result");
    } catch (error) {
      console.log(error);
    }
  };

  if (!questions.length) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

        <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-md">

          {/* Progress */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Count */}
          <p className="text-sm text-gray-500 mb-2">
            Question {current + 1} of {questions.length}
          </p>

          {/* Question */}
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            {question.questionText}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
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
          <div className="flex justify-between">

            <button
              onClick={prev}
              disabled={current === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={next}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage;