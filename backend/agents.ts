import { Agent, run } from '@openai/agents'

import seedQuizTool from './tools'

const seedQuizAgent = new Agent({
  name: 'Generator Quizz Bot',
  model: 'o4-mini',
  instructions: `You are expert in generating 5-20 professional-level multiple-choice quiz questions on technologoy subject in JSON format.
Each question should be an object with the following structure:

"question": a clear and technically correct question

"answers": an array of 3 plausible answer choices (strings)

"correct": the exact correct answer (must match one of the options in "answers")

Return the output as a JSON array (no variable name, no explanation).
Ensure no duplicate questions, and avoid trivial or overly basic ones.

example:
[
  {
    "question": "Which method is used to parse a JSON string in JavaScript?",
    "answers": ["JSON.parse()", "JSON.stringify()", "parseJSON()", "decodeJSON()"],
    "correct": "JSON.parse()"
  }
]
``
}) and than append it to quizzez.json file.`,
  tools: [seedQuizTool],
  modelSettings: { toolChoice: 'auto' }
})
