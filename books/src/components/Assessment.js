import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Assessment.module.css';

const Assessment = ({ title, questions }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  return (
    <div className={clsx('container', styles.assessmentContainer)}>
      <div className={styles.assessmentHeader}>
        <h3>{title}</h3>
      </div>
      <form onSubmit={handleSubmit} className={styles.assessmentForm}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionContainer}>
            <h4 className={styles.questionText}>{index + 1}. {question.text}</h4>
            <div className={styles.answersContainer}>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className={styles.answerOption}>
                  <input
                    type="radio"
                    id={`q${index}-o${optionIndex}`}
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={answers[index] == optionIndex}
                    onChange={() => handleAnswerChange(index, optionIndex)}
                    disabled={submitted}
                  />
                  <label htmlFor={`q${index}-o${optionIndex}`}>
                    {String.fromCharCode(65 + optionIndex)}. {option}
                  </label>
                </div>
              ))}
            </div>
            {submitted && (
              <div className={styles.feedback}>
                {answers[index] == question.correctAnswer ? (
                  <span className={styles.correct}>✓ Correct!</span>
                ) : (
                  <span className={styles.incorrect}>
                    ✗ Incorrect. Correct answer: {String.fromCharCode(65 + question.correctAnswer)}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
        {!submitted && (
          <button type="submit" className={styles.submitButton}>
            Submit Answers
          </button>
        )}
        {submitted && (
          <div className={styles.results}>
            <h4>Results</h4>
            <p>Your score: {calculateScore()}%</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Assessment;