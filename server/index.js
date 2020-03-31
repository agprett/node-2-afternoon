const express = require('express')
const msgCtrl = require('./controllers/message_controller')

const app = express()
const PORT = 3001

app.use(express.static(__dirname+ '/../public/build'))
app.use(express.json())
app.post('/api/messages', msgCtrl.createMessage)
app.get('/api/messages', msgCtrl.getMessagesFn)
app.put('/api/messages/:id', msgCtrl.updateMessage)
app.delete('/api/messages/:id', msgCtrl.deleteMessage)

app.listen(PORT, () => console.log(`Docked at port ${PORT}`))