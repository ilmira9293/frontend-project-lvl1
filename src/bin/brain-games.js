#!/usr/bin/env node
import name from '..';

export const start = () => {
    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if the number is even, otherwise answer "no"\n');
};

export const getName = () => name();
