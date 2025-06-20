export const p1 = `Convert the following text into a [number] questions quiz in JSON format. Each question must have exactly 4 answer options, with one correct answer clearly marked. Use only the information in the text to create the questions. Follow this structure exactly:

json
[
  {
    "question": "Your question here?",
    "answers": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": "Correct Option"
  },
  ...
]


Now here's the text:
...
`;

export const p2 = `Convert the following text into a quiz in JSON format. Each question must have:
exactly 4 answer choices
1 clearly correct answer
all content must be based strictly on the text provided
output only the array of questions, no variable assignment, no extra text or explanation
Structure:
[
  {
    "question": "Your question here?",
    "answers": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": "Correct Option"
  }
]
Now here is the text:
...`;
