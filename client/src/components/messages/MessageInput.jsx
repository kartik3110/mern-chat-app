import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="border text-sm rounded-lg w-full p-2.5  bg-gray-700 border-gray-600 text-white  flex">
        <input
          type="text"
          className="bg-transparent w-11/12 focus:outline-none"
          placeholder="Send a message"
        />
        <button type="submit" className="flex items-center ml-3">
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
