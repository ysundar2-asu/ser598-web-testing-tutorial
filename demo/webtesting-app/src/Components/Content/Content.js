import React, { useCallback, useState } from "react";
import "./Content.scss";
import { Button, Modal, Radio } from "antd";
import HomePage from "../ECommerce/HomePage/HomePage";

export default function Content(props) {
  const { content, currentActiveTab, tabs, onChangeTab, onTopicComplete } = props;
  const {
    title,
    paragraphs,
    sections,
    quiz,
    bullets,
    type,
    isQuizCompleted,
    isPreviousButtonDisabled,
    example,
    code,
    links,
  } = content;

  const [openQuiz, setOpenQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const shouldShowQuiz = type !== "component" && quiz && quiz.length > 0;

  const goToNextTopic = useCallback(() => {
    onTopicComplete(currentActiveTab);

    const currentIndex = tabs.findIndex(
      (tab) => tab.mapId === currentActiveTab
    );
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      onChangeTab(nextTab.mapId);
    }
  }, [currentActiveTab, tabs, onChangeTab, onTopicComplete]);

  const handleNextClick = useCallback(() => {
    if (quiz && quiz.length > 0 && !isQuizCompleted) {
      setOpenQuiz(true);
      setCurrentQuestionIndex(0);
      setScore(0);
    } else {
      goToNextTopic();
    }
  }, [isQuizCompleted, quiz, goToNextTopic]);

  const handleNextQuestion = useCallback(() => {
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswer !== null) {
      const correctAnswerIndex = currentQuestion.answer;
      const correctAnswer = currentQuestion.options[correctAnswerIndex];
      if (selectedAnswer === correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setOpenQuiz(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      goToNextTopic();
    }
  }, [currentQuestionIndex, quiz, selectedAnswer, goToNextTopic]);

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
        {type !== "component" && (
          <div className="contentBody">
            {(type === "paragraphs" || type === "multiple") && paragraphs && (
              <div className="contentParagraphs">
                {paragraphs.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            )}
            {(type === "bullets" || type === "multiple") && bullets && (
              <div className="contentBullets">
                <ul>
                  {bullets.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
            {(type === "sections" || type === "multiple") && sections && (
              <div className="contentSections">
                {sections.map((data, index) => (
                  <div key={index} className="sectionItem">
                    <span className="contentSubtitle">{data.subtitle}</span>
                    <p>{data.text}</p>
                    {data.example && (
                      <div className="exampleBlock">
                        <span className="exampleText">{data.example}</span>
                      </div>
                    )}
                    {data.code && (
                      <div className="codeBlock">
                        <pre><code>{data.code}</code></pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {example && (
              <div className="topLevelExample">
                {example.description && (
                  <p className="exampleDescription">{example.description}</p>
                )}
                {example.code && (
                  <div className="codeBlock">
                    <pre><code>{example.code}</code></pre>
                  </div>
                )}
              </div>
            )}
            {code && (
              <div className="topLevelCode">
                {code.description && (
                  <p className="codeDescription">{code.description}</p>
                )}
                {code.snippet && (
                  <div className="codeBlock">
                    <pre><code>{code.snippet}</code></pre>
                  </div>
                )}
              </div>
            )}
            {links && links.length > 0 && (
              <div className="contentLinks">
                <span className="linksLabel">Useful Links:</span>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {type === "component" && (
          <div className="contentComponent">
            <HomePage />
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

      {shouldShowQuiz && (
        <Modal
          title={`Quiz - Question ${currentQuestionIndex + 1} of ${
            quiz?.length
          }`}
          open={openQuiz}
          onCancel={handleCloseQuiz}
          footer={[
            <Button
              key="back"
              onClick={handleCloseQuiz}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>,
            <Button
              key="next"
              type="primary"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              {currentQuestionIndex < quiz?.length - 1 ? "Next" : "Finish"}
            </Button>,
          ]}
        >
          <div
            style={{
              marginBottom: "16px",
              padding: "8px",
              backgroundColor: "#f0f5ff",
              borderRadius: "4px",
            }}
          >
            <strong>
              Score: {score} / {quiz?.length}
            </strong>
          </div>
          {quiz[currentQuestionIndex] && (
            <div>
              <p>{quiz[currentQuestionIndex].question}</p>
              <Radio.Group
                onChange={(e) => setSelectedAnswer(e.target.value)}
                value={selectedAnswer}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {quiz[currentQuestionIndex].options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
