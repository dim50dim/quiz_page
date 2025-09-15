'use client'
import React, { useState } from 'react'
import {quiz} from '../data.js'


const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex,setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score:0,
    correctAnswers :0,
    wrongAnswers:0,
  });
   const {questions} = quiz;
   const {question, answers,correctAnswer} = questions[activeQuestion];

   const onAnswerSelected  = ((answer,index)) => {
      setChecked(true);
      setSelectedAnswerIndex(index)
   }

  return (
    <div className='container'>
         <h1 className='text-2xl font-bold '>Quiz Page</h1>
         <div>
            <h2>Question : {activeQuestion + 1}
                         <span>/{questions.length}</span>
            </h2>
   
         </div>
         <div>
            {!showResult ? (
            <div className='quiz-container'>
                <h3>{questions[activeQuestion].question}</h3>
                {answers.map((answer,index)=> {
                    <li key={index} 
                    onClick={() => onAnswerSelected(answer,index)}
                    className={setSelectedAnswerIndex === index ? 'li-selected' :'li-hover'}>
                        <span>{answer}</span>
                    </li>
                })}
            </div>
            
            ) : (
            <div className='quiz-container'></div>
            )}
         </div>
    </div>
  )
}

export default page
  