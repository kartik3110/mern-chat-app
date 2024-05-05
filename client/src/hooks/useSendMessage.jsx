import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

const useSendMessage = () => {
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
export default useSendMessage;
