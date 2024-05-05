import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");
    console.log(message);
    await sendMessage(message);
    e.target.reset();
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="border text-sm rounded-lg w-full p-2.5  bg-gray-700 border-gray-600 text-white  flex">
        <input
          type="text"
          name="message"
          className="bg-transparent w-11/12 focus:outline-none"
          placeholder="Send a message"
        />
        <button
          disabled={loading}
          type="submit"
          className="flex items-center ml-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
