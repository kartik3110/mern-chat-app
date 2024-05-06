import { useSelector } from "react-redux";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime.js";

export default function Message({ message }) {
  const { user: currentUser } = useAuthContext();
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );

  const fromMe = message.senderId === currentUser._id;
  const cssClass = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-blue-400" : "";
  const profilePic = fromMe
    ? currentUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div className={`chat ${cssClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleColor} text-white`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-80">
        <time className="text-xs opacity-80">
          {extractTime(message.createdAt)}
        </time>
      </div>
    </div>
  );
}
