const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercent }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercent}%</p>
    </div>
  );
};

export default Feedback;
