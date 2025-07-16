import { tool } from '@openai/agents';

import fs from 'fs';
import path from 'path';
import * as z from 'zod';

const FILEPATH = path.join(__dirname, '../quizzez.json');

export const seedQuizToolAgentParameters = z.object({
  quizArr: z.array(
    z.object({
      question: z.string(),
      answers: z.array(z.string()),
      correct: z.string(),
    })
  ),
});

interface QuizProps {
  question: string;
  answers: string[];
  correct: string;
}

const appendQuizToJsonFile = (quizArr: QuizProps[]): void => {
  if (!Array.isArray(quizArr)) {
    throw new Error('The new quiz must be an array of question objects.');
  }

  try {
    const jsonData = fs.readFileSync(FILEPATH, 'utf8');
    const quizData = JSON.parse(jsonData);

    if (!Array.isArray(quizData)) {
      throw new Error('Top-level JSON structure must be an array.');
    }

    quizData.push(quizArr);

    fs.writeFileSync(FILEPATH, JSON.stringify(quizData, null, 2), 'utf8');
    console.log('New quiz appended successfully.');
  } catch (error) {
    console.error('Failed to append quiz:', error);
  }
};

const seedQuizTool = tool({
  name: 'generate_random_quiz',
  description:
    'Appends an entire new quiz array (array of questions) to the end of the root array in the JSON file.',
  parameters: seedQuizToolAgentParameters,
  execute: ({ quizArr }) => appendQuizToJsonFile(quizArr),
});

export default seedQuizTool;
