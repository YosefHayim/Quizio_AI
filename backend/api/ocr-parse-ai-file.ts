import fs from 'fs';
import OpenAI from 'openai';
import { client } from '../config';

export const ocrParseAiPdf = async (file: Express.Multer.File) => {
  const data = fs.readFileSync(file.path);
  const base64String = data.toString('base64');

  const response = await client.responses.create({
    model: 'gpt-4.1-nano-2025-04-14',
    input: [
      {
        role: 'user',
        content: [
          {
            type: 'input_file',
            filename: file.filename,
            file_data: `data:application/pdf;base64,${base64String}`,
          },
          {
            type: 'input_text',
            text: `Read the content of this file and generate exactly 10 multiple-choice questions in JSON format. The output must be a single array of 10 objects. Each object must strictly follow this structure:
{
  "question": "A clear question based on the file content",
  "answers": ["option A", "option B", "option C", "option D"],
  "correct": "The exact text of the correct answer from the answers array"
}`,
          },
        ],
      },
    ],
  });
  console.log(response.output_text);
  return response.output_text;
};

export const ocrParseAiImage = async (file: Express.Multer.File) => {
  const base64Image = fs.readFileSync(file.path, 'base64');

  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: [
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: `Read the content of this file and generate exactly 10 multiple-choice questions in JSON format. The output must be a single array of 10 objects. Each object must strictly follow this structure:
{
  "question": "A clear question based on the file content",
  "answers": ["option A", "option B", "option C", "option D"],
  "correct": "The exact text of the correct answer from the answers array"
}`,
          },
          {
            type: 'input_image',
            detail: 'auto',
            image_url: `data:image/jpeg;base64,${base64Image}`,
          },
        ],
      },
    ],
  });

  console.log(response.output_text);
  return response.output_text;
};
