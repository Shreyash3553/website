const messageModel = require('..//models/message.model')
const Message = require('..//models/message.model')

module.exports.addMsg = async (req, res, next) => {
  try {
    const { from, to, message } = req.body
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    })
    console.log(data)
    if (data) return res.json({ msg: 'Message added to DB' })

    return res.json({ msg: 'failed to add message' })
  } catch (ex) {
    next(ex)
  }
}

module.exports.getMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages =  await messageModel.find({ 
      users:{
        $all:[from ,to],
      }
    }).sort( {updatedAt: 1});
    const projectedmessage = messages.map((msg) =>{
      return {
        fromself: msg.sender.toString() === from,
        message:msg.message.text
      }
    })
    res.json(projectedmessage)

  } catch (ex) {
    next(ex)
  }
}
