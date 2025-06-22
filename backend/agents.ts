import { run, setDefaultOpenAIKey } from '@openai/agents'
import { seedQuizAgent, validateQuizJsonFileAgent } from './agents/seed-quiz-agent'

import { CONFIG } from './config'

setDefaultOpenAIKey(CONFIG.openAiKey!)

if (!CONFIG.openAiKey) throw new Error('Missing OPENAI API Key')

const runAgents = async () => {
  for (let i = 0; i < 30; i++) {
    const insertQuizzez = await run(
      seedQuizAgent,
      'create me a new quiz of full stack web development and react native subjects, 10 questions'
    )
    console.log(insertQuizzez.history)
  }
  const validateQuizJson = await run(
    validateQuizJsonFileAgent,
    'Validate if the sturcture is the same across all the file if so tell me'
  )
  console.log(validateQuizJson.history)
}

runAgents()
