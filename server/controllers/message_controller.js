let messages = []
let id = 0

module.exports = {
  
  createMessage: (req, res) => {
    const {text, time} = req.body

    const newMessage = {text, time, id}
    messages.push(newMessage)
    id++
    res.status(200).send(messages)
  },

  getMessagesFn: (req, res) => {
    res.status(200).send(messages)
  },

  updateMessage: (req, res) => {
    const {text} = req.body
    const {id} = req.params
    const index = messages.findIndex(message => message.id === +id)

    if(index === -1){
      return res.status(404).send('Message does not exist')
    }
    messages[index] = {...messages[index], text}
    res.status(200).send(messages)
  },

  deleteMessage: (req, res) => {
    const {id} = req.params
    const index = messages.findIndex(message => {
      return message.id === +id
    })

    if(index === -1){
      return res.status(404).send('Message does not exist')
    }
    messages.splice(index, 1)
    res.status(200).send(messages)
  }
}