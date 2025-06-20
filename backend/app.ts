import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({
    status: 'active',
    message: 'Backend of Quizio is running'
  })
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
