import { Agent, run, setDefaultOpenAIKey } from '@openai/agents'
import seedQuizTool, { seedQuizToolAgentParamters } from './tools'

import { CONFIG } from './config'
import { p2 } from './prompts-storage'

setDefaultOpenAIKey(CONFIG.openAiKey!)

if (!CONFIG.openAiKey) throw new Error('Missing OPENAI API Key')

const seedQuizAgent = new Agent({
  name: 'Generator Quizz Bot',
  model: 'o4-mini',
  instructions: p2,
  tools: [seedQuizTool],
  outputType: seedQuizToolAgentParamters
})

const runAgents = async () => {
  const results = []

  for (let i = 0; i < 20; i++) {
    const r = await run(
      seedQuizAgent,
      'create me a new quiz of full stack web development and react native subjects, 10 questions'
    )
    results.push(r.rawResponses)
  }

  console.log('All quizzes generated:')
  console.log(results)
}

runAgents()
