import { useState } from "react";
import { addQuestion } from "../../api/questionApi";
import toast from "react-hot-toast";

const AddQuestionPage = () => {
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addQuestion({
        questionText,
        category,
        options: [
          { text: "Strongly Disagree", value: 1 },
          { text: "Disagree", value: 2 },
          { text: "Neutral", value: 3 },
          { text: "Agree", value: 4 },
          { text: "Strongly Agree", value: 5 },
        ],
      });

      toast.success("Question added");
      setQuestionText("");
      setCategory("");
    } catch (err) {
      toast.error("Error adding question");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">

        <h2 className="text-xl font-semibold mb-4">
          Add Question
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Category (analytical, creative...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded-lg"
            required
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Add Question
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddQuestionPage;