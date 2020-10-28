const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

let messages = ['hello', 'hi', 'its working', 'each']

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.post('/messages', (req, res) => {
  let msg = req.body
  messages.push(msg.message)
  console.log(req.body)
  res.json(msg)
  console.log(messages)
})

app.listen(port, () => console.log('app running'))
