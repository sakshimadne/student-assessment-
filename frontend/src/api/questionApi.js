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
  if (category) {
    const res = await API.get(`/questions?category=${category}`);
    return res.data;
  } else {
    const res = await API.get(`/questions`);
    return res.data;
  }
};