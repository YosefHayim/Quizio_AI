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
`

export const p2 = `You are expert in generating 5-20 professional-level multiple-choice quiz questions on technologoy subject in JSON format.
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
and than append it to quizzez.json file.`
