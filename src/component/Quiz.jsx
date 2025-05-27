import React, { useState, useMemo } from 'react';

const questions = [
  {
    id: 1,
    question: 'Capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'CEO of Tesla?',
    options: ['Elon Musk', 'Jeff Bezos', 'Sundar Pichai', 'Tim Cook'],
    correctAnswer: 'Elon Musk',
  },
];

export default function QuizApp() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selected) => {
    const correct = questions[currentQ].correctAnswer === selected;
    setAnswers(prev => [...prev, { questionId: questions[currentQ].id, isCorrect: correct }]);
    setCurrentQ(prev => prev + 1);
  };

  const score = useMemo(() => {
    console.log("Calculating score...");
    return answers.filter(ans => ans.isCorrect).length;
  }, [answers]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6">Score: {score}</h2>

      {currentQ < questions.length ? (
        <>
          <h3 className="text-lg font-semibold mb-4">{questions[currentQ].question}</h3>
          <ul className="space-y-2">
            {questions[currentQ].options.map((opt, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-4 font-medium">🎉 Quiz complete! Final score: {score}</p>
      )}
    </div>
  );
}
