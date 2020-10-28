const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.VUE_APP_PORT || 4000
const api_url = process.env.VUE_APP_ROOT_URL || 'http://localhost'

app.use(cors())
app.use(bodyParser.json())

let messages = [
  { user: 'Jim', text: 'yes' },
  { user: 'Jim', text: 'messages' },
]
let users = [{ userName: 'Jim', password: '1' }]

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.get('/messages/:id', (req, res) => {
  res.send(messages[req.params.id])
})

app.post('/messages', (req, res) => {
  const token = req.header('Authorization')
  const userId = jwt.decode(token, process.env.VUE_APP_JSON_WEB_TOKEN)
  const user = users[userId]
  let msg = { user: user.userName, text: req.body.message }
  messages.push(msg)
  res.json(msg)
})

app.post('/register', (req, res) => {
  let registerData = req.body
  let newIndex = users.push(registerData)
  let userId = newIndex - 1

  let token = jwt.sign(userId, process.env.VUE_APP_JSON_WEB_TOKEN)

  res.json(token)
})

app.listen(port, () => console.log(`app running on port: ${process.env.VUE_APP_PORT}`))
