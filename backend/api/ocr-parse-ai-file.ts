import { client } from '../config'
import fs from 'fs'

export const ocrParseAiFile = async (file: Express.Multer.File) => {
  const data = fs.readFileSync(file.path)
  const base64String = data.toString('base64')

  const response = await client.responses.create({
    model: 'gpt-4.1',
    input: [
      {
        role: 'user',
        content: [
          {
            type: 'input_file',
            filename: file.filename,
            file_data: `data:application/pdf;base64,${base64String}`
          },
          {
            type: 'input_text',
            text: 'Please return all the data you find within this pdf file.'
          }
        ]
      }
    ]
  })
  console.log(response.output_text)
  return response.output_text
}
