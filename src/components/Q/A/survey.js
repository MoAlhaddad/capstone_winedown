import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function QandA() {
	const history = useHistory();

	const questions = [
		{
			questionText: 'Where do you prefer your wine coming from?',
			answerOptions: [
				{ answerText: 'Spain', isCorrect: true },
				{ answerText: 'France', isCorrect: true },
				{ answerText: 'Italy', isCorrect: true },
				{ answerText: 'other', isCorrect: true },
			],
		},
		{
			questionText: 'What wine type do you prefer?',
			answerOptions: [
				{ answerText: 'red', isCorrect: true },
				{ answerText: 'sweet', isCorrect: true },
				{ answerText: 'dry', isCorrect: true },
				{ answerText: 'white', isCorrect: true },
			],
		},
		{
			questionText: 'How many years have you been drinking wine?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '5', isCorrect: true },
				{ answerText: '10', isCorrect: true },
				{ answerText: '20+', isCorrect: true },
			],
		},
		
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setTimeout(() => history.push('/random-wines'), 3000);
		}
	};
	return (
		<div>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}<br/>
					Redirecting you to random wines page based on your selection.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, answerOptionIdx) => (
							<Button style={{margin: '0 10px'}} key={answerOptionIdx} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
					</div>
				</>
			)}
		</div>
	);
}