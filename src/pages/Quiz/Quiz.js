// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { storyData, staticTranslations } from './Data';
// import { Link } from 'react-router-dom';

// const QuizContainer = styled.div`
//   background: #0c0c0c;
//   color: #fff;
//   min-height: 100vh;
//   padding: 40px 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;

// const SituationGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 24px;
//   width: 100%;
//   max-width: 1000px;
//   margin-top: 24px;
// `;

// const Card = styled.div`
//   background: #1c1c1c;
//   padding: 24px;
//   border-radius: 12px;
//   cursor: pointer;
//   transition: 0.3s ease;
//   box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);

//   &:hover {
//     transform: translateY(-5px);
//     background: #222;
//   }
// `;

// const QuestionCard = styled.div`
//   background: #1e1e1e;
//   padding: 32px;
//   border-radius: 12px;
//   max-width: 800px;
//   width: 100%;
// `;

// const Option = styled.button`
//   background: #2a2a2a;
//   color: #eee;
//   border: none;
//   margin: 8px 0;
//   padding: 12px 16px;
//   width: 100%;
//   text-align: left;
//   border-radius: 8px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:hover {
//     background: #444;
//   }

//   &.correct {
//     background-color: #144d2c;
//   }

//   &.wrong {
//     background-color: #5e1d1d;
//   }
// `;

// const Score = styled.div`
//   margin-top: 16px;
//   font-size: 18px;
//   color: #0f0;
// `;

// const BackButton = styled(Link)`
//   position: fixed;
//   top: 90px;;
//   left: 20px;
//   background: #fff;
//   color: #000;
//   border: 1px solid #444;
//   padding: 10px 16px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-size: 15px;
//   font-weight: bold;
//   z-index: 999;
//   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);

//   &:hover {
//     background: #e4e4e4;
//     color: #111;
//   }
// `;


// const ResetStoryButton = styled.button`
//   position: fixed;
//   top: 90px;
//   right: 140px;
//   background: #fff;
//   color: #000;
//   border: 1px solid #aaa;
//   padding: 8px 14px;
//   border-radius: 8px;
//   font-size: 14px;
//   font-weight: bold;
//   z-index: 999;
//   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
//   cursor: pointer;

//   &:hover {
//     background: #eee;
//   }
// `;


// const Explanation = styled.p`
//   margin-top: 12px;
//   color: #aaa;
//   font-style: italic;
// `;

// const LanguageSelector = styled.select`
//   position: fixed;
//   top: 90px;
//   right: 20px;
//   background: #fff;
//   color: #000;
//   border: 1px solid #aaa;
//   padding: 8px 12px;
//   border-radius: 8px;
//   font-size: 14px;
//   font-weight: bold;
//   z-index: 999;
//   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);

//   &:hover {
//     background: #f0f0f0;
//   }
// `;


// const AudioButton = styled.button`
//   margin-top: 10px;
//   padding: 6px 12px;
//   background: #555;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;

//   &:hover {
//     background: #777;
//   }
// `;

// function Quiz() {
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [incorrectAnswers, setIncorrectAnswers] = useState([]);
//   const [language, setLanguage] = useState('en');

//   const handleOptionClick = (optionText) => {
//     if (selectedOption !== null) return;

//     const correctAnswer = selectedStory.questions[currentQ].answer[language];
//     setSelectedOption(optionText);

//     if (optionText === correctAnswer) {
//       setScore(score + 1);
//     } else {
//       setIncorrectAnswers([
//         ...incorrectAnswers,
//         selectedStory.questions[currentQ].question[language],
//       ]);
//     }

//     setTimeout(() => {
//       if (currentQ + 1 < selectedStory.questions.length) {
//         setCurrentQ(currentQ + 1);
//         setSelectedOption(null);
//       } else {
//         setShowScore(true);
//       }
//     }, 2000);
//   };

//   const speak = () => {
//     const synth = window.speechSynthesis;
//     const q = selectedStory.questions[currentQ];
//     const textToSpeak = [
//       q.question[language],
//       ...q.options[language]
//     ].join('. ');
//     const utterance = new SpeechSynthesisUtterance(textToSpeak);
//     if (language === 'hi') utterance.lang = 'hi-IN';
//     else if (language === 'mr') utterance.lang = 'mr-IN';
//     else utterance.lang = 'en-US';
//     synth.speak(utterance);
//   };

//   const resetQuiz = () => {
//     setSelectedStory(null);
//     setCurrentQ(0);
//     setScore(0);
//     setShowScore(false);
//     setSelectedOption(null);
//     setIncorrectAnswers([]);
//   };

//   return (
//     <QuizContainer>
//       <BackButton to="/">← Home</BackButton>
//       <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="en">English</option>
//         <option value="hi">हिन्दी</option>
//         <option value="mr">मराठी</option>
//       </LanguageSelector>

//       {selectedStory && (
//         <ResetStoryButton onClick={resetQuiz}>← Back</ResetStoryButton>
//       )}

//       {!selectedStory ? (
//         <>
//           <h1>Select a Financial Event</h1>
//           <SituationGrid>
//   {storyData.map((situation) => (
//     <Card key={situation.id} onClick={() => setSelectedStory(situation)}>
//       <h2>{situation.title[language]}</h2>
//       <p>{situation.description[language]}</p> 
//     </Card>
//   ))}
// </SituationGrid>

//         </>
//       ) : !showScore ? (
//         <QuestionCard>
//           <h2>{selectedStory.questions[currentQ].question[language]}</h2>
//           {selectedStory.questions[currentQ].options[language].map((opt, idx) => {
//             const correct = selectedStory.questions[currentQ].answer[language];
//             return (
//               <Option
//                 key={idx}
//                 onClick={() => handleOptionClick(opt)}
//                 className={
//                   selectedOption
//                     ? opt === correct
//                       ? 'correct'
//                       : opt === selectedOption
//                       ? 'wrong'
//                       : ''
//                     : ''
//                 }
//               >
//                 {opt}
//               </Option>
//             );
//           })}
//           <AudioButton onClick={speak}>🔊 Hear Question</AudioButton>
//           {selectedOption && (
//             <Explanation>
//               Explanation: {selectedStory.questions[currentQ].explanation[language]}
//             </Explanation>
//           )}
//           <Score>Points: {score}</Score>
//         </QuestionCard>
//       ) : (
//         <QuestionCard>
//           <h2>Quiz Finished!</h2>
//           <p>Your Score: {score} / {selectedStory.questions.length}</p>
//           {incorrectAnswers.length > 0 && (
//             <>
//               <h4>Questions you got wrong:</h4>
//               <ul>
//                 {incorrectAnswers.map((q, i) => (
//                   <li key={i} style={{ color: '#f66' }}>{q}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//           <Option onClick={resetQuiz}>Try Another</Option>
//         </QuestionCard>
//       )}
//     </QuizContainer>
//   );
// }

// export default Quiz;
import React, { useState, useEffect } from 'react'; // Import useEffect
import styled from 'styled-components';
import { storyData, staticTranslations } from './Data';
import { Link } from 'react-router-dom';

const QuizContainer = styled.div`
  background: #0c0c0c;
  color: #fff;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SituationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin-top: 24px;
`;

const Card = styled.div`
  background: #1c1c1c;
  padding: 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    background: #222;
  }
`;

const QuestionCard = styled.div`
  background: #1e1e1e;
  padding: 32px;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
`;

const Option = styled.button`
  background: #2a2a2a;
  color: #eee;
  border: none;
  margin: 8px 0;
  padding: 12px 16px;
  width: 100%;
  text-align: left;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #444;
  }

  &.correct {
    background-color: #144d2c;
  }

  &.wrong {
    background-color: #5e1d1d;
  }
`;

const Score = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: #0f0;
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 90px;;
  left: 20px;
  background: #fff;
  color: #000;
  border: 1px solid #444;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background: #e4e4e4;
    color: #111;
  }
`;


const ResetStoryButton = styled.button`
  position: fixed;
  top: 90px;
  right: 140px;
  background: #fff;
  color: #000;
  border: 1px solid #aaa;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;


const Explanation = styled.p`
  margin-top: 12px;
  color: #aaa;
  font-style: italic;
`;

const LanguageSelector = styled.select`
  position: fixed;
  top: 90px;
  right: 20px;
  background: #fff;
  color: #000;
  border: 1px solid #aaa;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background: #f0f0f0;
  }
`;


const AudioButton = styled.button`
  margin-top: 10px;
  padding: 6px 12px;
  background: #555;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #777;
  }
`;

function Quiz() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [language, setLanguage] = useState('en');
  const [voices, setVoices] = useState([]); // State to store available voices

  // Load voices when the component mounts or language changes
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Some browsers populate voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices(); // Load voices initially
  }, []); // Empty dependency array means this runs once on mount


  const handleOptionClick = (optionText) => {
    if (selectedOption !== null) return;

    const correctAnswer = selectedStory.questions[currentQ].answer[language];
    setSelectedOption(optionText);

    if (optionText === correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        selectedStory.questions[currentQ].question[language],
      ]);
    }

    // Delay before moving to the next question
    setTimeout(() => {
      if (currentQ + 1 < selectedStory.questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 2000); // 2-second delay
  };

  const speak = () => {
    const synth = window.speechSynthesis;
    const q = selectedStory.questions[currentQ];
    const textToSpeak = [
      q.question[language],
      ...(q.options[language] || []) // Ensure options array exists
    ].join('. ');

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    let langCode = 'en-US';
    if (language === 'hi') {
      langCode = 'hi-IN';
    } else if (language === 'mr') {
      langCode = 'mr-IN';
    }
    utterance.lang = langCode;

    // Stop any ongoing speech before starting a new one
    if (synth.speaking) {
      synth.cancel();
    }

    // Attempt to select the best available voice
    const desiredVoice = voices.find(voice => {
      // Prioritize Google voices for better quality
      if (voice.lang === langCode && voice.name.includes('Google')) return true;
      // Fallback to any voice for the language if a Google voice isn't found
      if (voice.lang === langCode) return true;
      return false;
    });

    if (desiredVoice) {
      utterance.voice = desiredVoice;
      console.log(`Using voice: ${desiredVoice.name} (${desiredVoice.lang}) for language: ${language}`);
    } else {
      console.warn(`No specific voice found for ${langCode}. Using browser default, which might not be optimal.`);
    }

    synth.speak(utterance);
  };

  const resetQuiz = () => {
    setSelectedStory(null);
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIncorrectAnswers([]);
    // Stop any ongoing speech when resetting the quiz
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <QuizContainer>
      <BackButton to="/">
        {staticTranslations.homeButton[language]} {/* Translated Home Button */}
      </BackButton>
      <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="mr">मराठी</option>
      </LanguageSelector>

      {selectedStory && (
        <ResetStoryButton onClick={resetQuiz}>
          {staticTranslations.backButton[language]} {/* Translated Back Button */}
        </ResetStoryButton>
      )}

      {!selectedStory ? (
        <>
          <h1>{staticTranslations.selectFinancialEvent[language]}</h1> {/* Translated Title */}
          <SituationGrid>
            {storyData.map((situation) => (
              <Card key={situation.id} onClick={() => setSelectedStory(situation)}>
                <h2>{situation.title[language]}</h2>
                <p>{situation.description[language]}</p>
              </Card>
            ))}
          </SituationGrid>
        </>
      ) : !showScore ? (
        <QuestionCard>
          <h2>{selectedStory.questions[currentQ].question[language]}</h2>
          {selectedStory.questions[currentQ].options[language].map((opt, idx) => {
            const correct = selectedStory.questions[currentQ].answer[language];
            return (
              <Option
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={
                  selectedOption
                    ? opt === correct
                      ? 'correct'
                      : opt === selectedOption
                      ? 'wrong'
                      : ''
                    : ''
                }
              >
                {opt}
              </Option>
            );
          })}
          <AudioButton onClick={speak}>
            {staticTranslations.hearQuestion[language]} {/* Translated Hear Question Button */}
          </AudioButton>
          {selectedOption && (
            <Explanation>
              {staticTranslations.explanation[language]}{' '}
              {selectedStory.questions[currentQ].explanation[language]}
            </Explanation>
          )}
          <Score>{staticTranslations.points[language]} {score}</Score> {/* Translated Points */}
        </QuestionCard>
      ) : (
        <QuestionCard>
          <h2>{staticTranslations.quizFinished[language]}</h2> {/* Translated Quiz Finished */}
          <p>{staticTranslations.yourScore[language]} {score} / {selectedStory.questions.length}</p> {/* Translated Score */}
          {incorrectAnswers.length > 0 && (
            <>
              <h4>{staticTranslations.questionsWrong[language]}</h4> {/* Translated Questions Wrong */}
              <ul>
                {incorrectAnswers.map((q, i) => (
                  <li key={i} style={{ color: '#f66' }}>{q}</li>
                ))}
              </ul>
            </>
          )}
          <Option onClick={resetQuiz}>{staticTranslations.tryAnother[language]}</Option> {/* Translated Try Another */}
        </QuestionCard>
      )}
    </QuizContainer>
  );
}

export default Quiz;


