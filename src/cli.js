import readlineSync from 'readline-sync';

const name = () => {
  console.log('Welcome to the Brain Games!');
  const askingQuestion = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askingQuestion}!`);
};

export { name };
