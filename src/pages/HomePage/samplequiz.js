import React, { useEffect, useState } from "react";

const questions = [
  "How much can I spend on Diwali shopping this year?",
  "क्या मैं इस महीने फोन खरीद सकता हूँ?",
  "मी पुढच्या महिन्यात फिरायला जाऊ शकतो का?",
  "How much did I spend on food last week?",
  "पिछले हफ्ते मैंने खाने पर कितना खर्च किया?",
  "माझं खातं शिल्लक किती आहे?",
];

const AnimatedQuestions = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Inject blinking animation on mount
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const currentQuestion = questions[questionIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentQuestion.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentQuestion.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentQuestion.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setQuestionIndex((prev) => (prev + 1) % questions.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, questionIndex]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h3 style={styles.heading}>Let’s talk money.</h3>
        <div style={styles.questionBox}>
          <span style={styles.text}>{text}</span>
          <span style={styles.cursor}>|</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    width: "100%",
    backgroundColor: "white", // black background
  },
  card: {
    backgroundColor: "#111", // slightly off-black for depth
    borderRadius: "16px",
    padding: "2rem 3rem",
    boxShadow: "0 0 25px rgba(75, 89, 247, 0.5)",
    textAlign: "center",
    maxWidth: "90%",
    width: "600px",
    border: "1px solid #4B59F7",
  },
  heading: {
    fontSize: "1.4rem",
    color: "#ccc",
    marginBottom: "1rem",
    fontWeight: "400",
  },
  questionBox: {
    fontSize: "1.6rem",
    fontWeight: "500",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    minHeight: "2.2rem",
  },
  text: {
    color: "#4B59F7",
    transition: "all 0.3s ease",
  },
  cursor: {
    marginLeft: "5px",
    animation: "blink 1s infinite",
    color: "#4B59F7",
  },
};

export default AnimatedQuestions;
