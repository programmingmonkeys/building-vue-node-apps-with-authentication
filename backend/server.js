const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/messages', (req, res) => {
  const messages = ['hello', 'hi', 'its working', 'each']
  res.send(messages)
})

app.post('/messages', (req, res) => {
  console.log(req.body)
  res.json({})
})

app.listen(port, () => console.log('app running'))
