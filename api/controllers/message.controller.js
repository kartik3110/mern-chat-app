import Conversation from "../models/Conversation.model.js";
import Message from "../models/Message.model.js";
import ExpressError from "../utils/ExpressError.js";

const messageController = {
  sendMessage: async (req, res) => {
    const { id: receiverId } = req.params;
    const { _id: senderId } = req.user;
    const { message } = req.body;

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

  //return array of all messages between 2 people
  getMessages: async (req, res) => {
    const { id: receiverId } = req.params;
    const { _id: senderId } = req.user;

    const convo = await Conversation.findOne({
      participants: { $all: [receiverId, senderId] },
    });

    if (!convo) {
      res.status(200).json([]); //empty array
      return; // not returning causes next line to run
    }

    await convo.populate("messages");
    res.status(200).json(convo.messages);
  },
};

export default messageController;
