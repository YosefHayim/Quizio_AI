import fs from 'fs'
import path from 'path'
import { tool } from '@openai/agents'
import { z } from 'zod'

const FILEPATH = path.join(__dirname, '../quizzez.json')

const validateQuizJsonFileTool = tool({
  name: 'validate_json_quizzes_file',
  description:
    'Your task is to read the entire file and make sure that the structure is valid by the parameters and if not report to me',
  parameters: z.object({}),
  execute: () => {
    return fs.readFileSync(FILEPATH, 'utf8')
  }
})

export default validateQuizJsonFileTool
