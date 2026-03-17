import API from "./axiosInstance";

export const addQuestion = async (data) => {
  const res = await API.post("/questions/add", data);
  return res.data;
};

export const submitAnswers = async (answers) => {
  const res = await API.post("/answers/submit", { answers });
  return res.data;
};

export const getQuestions = async () => {
  const res = await API.get("/questions");
  return res.data;
};