import React, { useState } from "react";

const QuizApp = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const quizData = [
    {
      question: "What is the most used programming language in 2023?",
      choices: {
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript and Python",
      },
      correct: "d",
    },
    {
      question:
        " What is the most popular JavaScript Frameworks for Web Development?",
      choices: {
        a: "Angular JS",
        b: "React JS",
        c: "jQuery",
        d: "NodeJS",
      },
      correct: "b",
    },
    {
      question: "What is the best programming language for Machine Learning?",
      choices: {
        a: "Python",
        b: "Java",
        c: "Javascript",
        d: "Julia",
      },
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      choices: {
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
      },
      correct: "b",
    },
    {
      question: "What year did Python start?",
      choices: {
        a: "1991",
        b: "1992",
        c: "1995",
        d: "none of the above",
      },
      correct: "a",
    },
  ];

  const handleQuestion = (questionIndex) => {
    setCurrentQuiz(questionIndex);
  };

  const handleAnswer = (choiceKey) => {
    if (document.getElementById(choiceKey).checked) {
      setCurrentQuiz((prevQuiz) => prevQuiz + 1);
      setError("");
    } else {
      setError("You must select in choices!");
    }
  };

  const handleSubmit = () => {
    const isSelected = document.querySelector(`input[name=choice]:checked`);

    if (!isSelected) {
      setError("You must select in choices!");
      return;
    }

    if (
      (document.querySelector(`input[name=choice]:checked`).checked =
        !isSelected)
    ) {
      setCurrentQuiz((prevQuiz) => prevQuiz + 1);
      setError("");
    }

    if (isSelected.value === quizData[currentQuiz].correct) {
      setScore(score + 1);
    }

    if (currentQuiz === quizData.length - 1) {
      document.querySelector(".quiz-box").innerHTML = `<h2>You've finished! 
      <br/>
      <br>
       Your score is ${score} out of ${quizData.length}</h2> `;

      document.querySelector(
        ".submitBtn"
      ).innerHTML = `<button onClick={window.location.reload()} className="tryBtn">Try Again</button>`;
    } 
    
    else {
      setCurrentQuiz((prevQuiz) => prevQuiz + 1);
      setError("");
    }
  };

  return (
    <div className="quiz-container">
      <div className="quizheader">
        <div className="quiz-box">
          <h1 className="questions-top">{quizData[currentQuiz].question}</h1>
          <div className="choices">
            {Object.entries(quizData[currentQuiz].choices).map(
              ([choiceKey, choiceValue]) => (
                <div key={choiceKey} className="questions">
                  <input
                    type="radio"
                    name="choice"
                    id={choiceKey}
                    value={choiceKey}
                    onClick={handleAnswer}
                    className="input"
                  />
                  <label htmlFor={choiceKey} className="label">
                    {choiceValue}
                  </label>
                </div>
              )
            )}
            {error ? <p className="error">{error}</p> : null}
          </div>
        </div>
        <button className="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
