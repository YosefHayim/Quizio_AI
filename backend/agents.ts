import { run, setDefaultOpenAIKey } from '@openai/agents';
import { CONFIG } from './config';
import { seedQuizAgent, validateQuizJsonFileAgent } from './seed-quiz-agent';

setDefaultOpenAIKey(CONFIG.openAiKey!);

if (!CONFIG.openAiKey) throw new Error('Missing OPENAI API Key');

const runAgents = async () => {
  for (let i = 0; i < 30; i++) {
    const insertQuizzes = await run(
      seedQuizAgent,
      'create me a new quiz of full stack web development and react native subjects, 10 questions'
    );
    console.log(insertQuizzes.history);
  }
  const validateQuizJson = await run(
    validateQuizJsonFileAgent,
    'Validate if the structure is the same across all the file if so tell me'
  );
  console.log(validateQuizJson.history);
};

runAgents();
