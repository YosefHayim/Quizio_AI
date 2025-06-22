import { CONFIG } from '../config'
import OpenAI from 'openai'
const client = new OpenAI({ apiKey: CONFIG.openAiKey })

const genereateQuizByAi = async (content: string) => {
  const completion = await client.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      {
        role: 'user',
        content
      }
    ]
  })

  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content
}

export default genereateQuizByAi
