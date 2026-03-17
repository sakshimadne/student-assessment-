const generateInsights = (scores) => {
  return {

    analytical:
      scores.analytical > 70
        ? "You have strong problem-solving skills."
        : "You can improve your analytical thinking.",

    creative:
      scores.creative > 70
        ? "You are highly creative."
        : "Try exploring creative activities.",

    social:
      scores.social > 70
        ? "You connect well with people."
        : "Work on communication skills.",

    leadership:
      scores.leadership > 70
        ? "You have leadership qualities."
        : "You can develop leadership skills.",

    technical:
      scores.technical > 70
        ? "You are technically strong."
        : "Improve technical skills."
  };
};

module.exports = generateInsights;