import { client } from '../config'

const generateQuiz = async (content: string): Promise<string | undefined> => {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'user',
          content
        }
      ]
    })

    console.log(response.choices[0].message.content)
    return response.choices[0].message.content ?? 'No response has been recieved'
  } catch (error) {
    console.error('Error occurred during generateQuiz:', error)
  }
}

export default generateQuiz
