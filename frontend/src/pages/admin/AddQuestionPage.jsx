import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import { addQuestion } from "../../api/questionApi";
import Navbar from "../../components/layout/Navbar";

const AddQuestionPage = () => {
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addQuestion({ questionText, category });

      toast.success("Question added successfully");

      setQuestionText("");
      setCategory("");
    } catch (error) {
      toast.error("Failed to add question");
    }
  };

  return (
    <>
  
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 relative overflow-hidden">

      
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-gray-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
        >

 
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-6 hidden md:block"
>
  <h1 className="text-3xl font-semibold text-gray-800">
    Build Your Assessment 🚀
  </h1>

  <p className="text-gray-500 text-sm leading-relaxed">
    Create smart questions to evaluate personality, strengths,
    and career direction using structured insights.
  </p>


  <div className="grid grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-lg font-semibold text-gray-800">120+</p>
      <p className="text-xs text-gray-500">Questions</p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-lg font-semibold text-gray-800">5</p>
      <p className="text-xs text-gray-500">Categories</p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-lg font-semibold text-gray-800">AI</p>
      <p className="text-xs text-gray-500">Insights</p>
    </div>
  </div>


  <motion.img
    whileHover={{ scale: 1.02 }}
    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
    className="rounded-2xl shadow-md object-cover h-64 w-full"
  />


  <div className="bg-indigo-50 p-4 rounded-xl text-sm text-indigo-700">
    💡 Tip: Good questions = better career predictions
  </div>
</motion.div>
       
          <div className="bg-white rounded-2xl shadow-lg p-8 transition duration-300 hover:shadow-2xl hover:-translate-y-1">

   
            <div className="flex items-center gap-2 mb-6">
              <FiPlusCircle className="text-indigo-600 text-xl" />
              <h2 className="text-xl font-semibold text-gray-800">
                Add Question
              </h2>
            </div>

    
            <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
> 
            <form onSubmit={handleSubmit} className="space-y-5">

           
              <div>
                <label className="text-sm text-gray-600">
                  Question
                </label>
                <input
                  type="text"
                  placeholder="Enter your question..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:scale-[1.01] transition"
                  required
                />
              </div>

          
              <div>
                <label className="text-sm text-gray-600">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:scale-[1.01] transition"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="analytical">Analytical</option>
                  <option value="creative">Creative</option>
                  <option value="social">Social</option>
                  <option value="leadership">Leadership</option>
                  <option value="technical">Technical</option>
                </select>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:scale-[1.01] transition"
              >
                <FiPlusCircle />
                Add Question
              </motion.button>

            </form>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default AddQuestionPage;