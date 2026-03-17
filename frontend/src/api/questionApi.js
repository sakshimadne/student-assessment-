import API from "./axiosInstance";

export const addQuestion = async (data) => {
  const res = await API.post("/questions/add", data);
  return res.data;
};

export const submitAnswers = async (answers) => {
  const res = await API.post("/questions/submit", { answers });
  return res.data;
};

export const getQuestions = async (category) => {
  const res = await API.get(`/questions?category=${category}`);
  return res.data;
};