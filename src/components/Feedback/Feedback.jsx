import styles from "../Feedback/Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercent }) => {
  return (
    <div className={styles.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercent}%</p>
    </div>
  );
};

export default Feedback;
