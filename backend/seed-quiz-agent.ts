import seedQuizTool, { seedQuizToolAgentParameters } from './agent-tools/seed-quiz-agent-tool'

import { Agent } from 'http'
import { p2 } from './prompts-storage'
import validateQuizJsonFileTool from './agent-tools/validate-quiz-json-file-tool'

export const seedQuizAgent = new Agent({
  name: 'Generator Quiz Bot',
  model: 'o4-mini',
  instructions: p2,
  tools: [seedQuizTool],
  outputType: seedQuizToolAgentParameters
})

export const validateQuizJsonFileAgent = new Agent({
  name: 'Validate structure of json',
  model: 'o4-mini',
  instructions: 'You are expert in validating json file structure based on parmaters provided',
  tools: [validateQuizJsonFileTool]
})
