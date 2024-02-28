import Conversation from "../models/Conversation.model.js";
import Message from "../models/Message.model.js";

const messageController = {
  sendMessage: async (req, res) => {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const { _id: senderId } = req.user;
    console.log("receiver Id : ", receiverId);
    console.log("sender Id : ", senderId);
    console.log("message sent: ", message);

    const newMessage = new Message({
      message,
      senderId,
      receiverId,
    });

    let convo = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
      //messages is empty array by default
    });

    if (!convo) {
      convo = new Conversation({
        participants: [receiverId, senderId],
      });
    }

    convo.messages.push(newMessage._id);

    await newMessage.save();
    await convo.save();

    res.status(201).json(newMessage);
  },
};

export default messageController;
