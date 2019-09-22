#!/usr/bin/env node

import { start, getName } from './brain-games'
import readlineSync from 'readline-sync';

const questionIsEven = () => {   
    start();
    const userName = getName();    
    const minNum = 1;
    const maxNum = 100;
    const divider = 2;
    const correctAnswerStr = 'Correct!';
    let count = 3;

  while (count > 0) {
    const rnd = Math.round(Math.random() * (maxNum - minNum) + minNum);
    console.log(`Question: ${rnd}`);
    const userAnswer = readlineSync.question('Your answer: '); // asking a question
    let correctAnswer = '';
      
    const check = (usAns, corrAns) => { 
      if (usAns === corrAns) { // checking: if user answer === correct answer = true; else  correct answer = false
        console.log(correctAnswerStr);
        return true;
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again!!`);
      return false;
    };
      
    if (rnd % divider === 0) { // if random number % divider === 0
      correctAnswer = 'yes';
      if (check(userAnswer, correctAnswer) === false) {
        break;
      }
    } else {
      correctAnswer = 'no';
      if (check(userAnswer, correctAnswer) === false) {
        break;
      }
    }
    count -= 1;   
  }   
     if (count === 0) {
         console.log(`Congratulations, ${userName}`);
     }
};

questionIsEven();