const recommendCareer = (scores) => {

  const careers = [];

  if (scores.analytical > 70 && scores.technical > 70) {
    careers.push("Software Engineer", "Data Scientist");
  }

  if (scores.creative > 70) {
    careers.push("UI/UX Designer", "Content Creator");
  }

  if (scores.social > 70) {
    careers.push("HR Manager", "Teacher");
  }

  if (scores.leadership > 70) {
    careers.push("Project Manager", "Entrepreneur");
  }

  return careers;
};

module.exports = recommendCareer;