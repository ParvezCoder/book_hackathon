import React from 'react';
import clsx from 'clsx';
import styles from './ExerciseTemplate.module.css';

const ExerciseTemplate = ({ title, description, objectives, instructions, hints, solution }) => {
  return (
    <div className={clsx('container', styles.exerciseContainer)}>
      <div className={styles.exerciseHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.exerciseBody}>
        <div className={styles.exerciseDescription}>
          <h4>Description</h4>
          <p>{description}</p>
        </div>
        <div className={styles.exerciseObjectives}>
          <h4>Learning Objectives</h4>
          <ul>
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
        <div className={styles.exerciseInstructions}>
          <h4>Instructions</h4>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        {hints && hints.length > 0 && (
          <div className={styles.exerciseHints}>
            <h4>Hints</h4>
            <ul>
              {hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </div>
        )}
        {solution && (
          <details className={styles.exerciseSolution}>
            <summary>Solution</summary>
            <div className={styles.solutionContent}>
              {solution}
            </div>
          </details>
        )}
      </div>
    </div>
  );
};

export default ExerciseTemplate;