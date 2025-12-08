import React, { useCallback, useState } from "react";
import "./Content.scss";
import { Button, Modal, Radio } from "antd";

export default function Content(props) {
  const { content } = props;
  const {
    title,
    paragraphs,
    sections,
    quiz,
    bullets,
    type,
    isQuizCompleted,
    isPreviousButtonDisabled,
  } = content;

  const [openQuiz, setOpenQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextClick = useCallback(() => {
    if (quiz && !isQuizCompleted) {
      setOpenQuiz(true);
      setCurrentQuestionIndex(0);
      setScore(0);
    } else {
    }
  }, [isQuizCompleted, quiz]);

  const handleNextQuestion = useCallback(() => {
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswer !== null) {
      const correctAnswerIndex = currentQuestion.answer;
      const correctAnswer = currentQuestion.options[correctAnswerIndex];
      if (selectedAnswer === correctAnswer) {
        setScore(prevScore => prevScore + 1);
      }
    }

    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setOpenQuiz(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
    }
  }, [currentQuestionIndex, quiz, selectedAnswer]);

  const handleCloseQuiz = useCallback(() => {
    setOpenQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }, []);
  return (
    <div className="contentWrapper">
      <div className="content">
        <div className="contentTitle">
          <span className="contentTitleText">{title}</span>
        </div>
        {type === "paragraphs" && (
          <div className="contentParagraphs">
            {paragraphs.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
        )}
        {type === "bullets" && (
          <div className="contentBullets">
            <ul>
              {bullets.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        )}
        {type === "sections" && (
          <div className="contentSections">
            {sections.map((data, index) => (
              <div key={index}>
                <span className="contentSubtitle">{data.subtitle}</span>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="footer">
        <Button className="previousButton" disabled={isPreviousButtonDisabled}>
          Previous
        </Button>
        <Button className="nextButton" onClick={() => handleNextClick()}>
          Next
        </Button>
      </div>

      <Modal
      title={`Quiz - Question ${currentQuestionIndex + 1} of ${quiz.length}`}
      open={openQuiz}
      footer={[
        <Button key="back" onClick={handleCloseQuiz}>
          Close
        </Button>,
        <Button key="next" type="primary" onClick={handleNextQuestion}>
          {currentQuestionIndex < quiz.length - 1 ? 'Next' : 'Finish'}
        </Button>,
        <Button key="skip" onClick={handleNextQuestion}>
          Skip
        </Button>
      ]}
      >
      <div style={{ marginBottom: '16px', padding: '8px', backgroundColor: '#f0f5ff', borderRadius: '4px' }}>
        <strong>Score: {score} / {quiz.length}</strong>
      </div>
      {quiz[currentQuestionIndex] && (
        <div>
          <p>{quiz[currentQuestionIndex].question}</p>
          <Radio.Group
            onChange={(e) => setSelectedAnswer(e.target.value)}
            value={selectedAnswer}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {quiz[currentQuestionIndex].options.map((option, index) => (
              <Radio key={index} value={option}>{option}</Radio>
            ))}
          </Radio.Group>
        </div>
      )}</Modal>
    </div>
  );
}
