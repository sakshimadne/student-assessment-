const recommendCareer = (scores) => {
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const topCategory = sorted[0][0];

  const mapping = {
    analytical: ["Data Scientist", "Business Analyst"],
    creative: ["UI/UX Designer", "Content Creator"],
    social: ["Teacher", "Counselor"],
    leadership: ["Manager", "Entrepreneur"],
    technical: ["Software Engineer", "DevOps Engineer"],
  };

  return mapping[topCategory] || [];
};

module.exports = recommendCareer;