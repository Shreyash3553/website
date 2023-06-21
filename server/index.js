const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const socket = require('socket.io')
const UserRoutes = require('./routes/userroutes')
const MessageRoutes = require('./routes/message.route')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/api/auth', UserRoutes)
app.use('/api/messages', MessageRoutes)

mongoose
  .connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log(err.message)
  })

const port = process.env.PORT || 7000

const server = app.listen(port, () => console.log(`Server started on ${port}`))

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map()

io.on('connection', (socket) => {
  global.chatSocket = socket
  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id)
  })

  socket.on('send-msg', (data) => {
    const sendUserSocket = onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data.message)
    }
  })
})
