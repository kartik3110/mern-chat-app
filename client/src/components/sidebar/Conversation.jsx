import { useSelector, useDispatch } from "react-redux";
import { setSelectedConversation } from "../../features/conversation/conversationSlice";
const Conversation = ({ user, loading }) => {
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );

  const dispatch = useDispatch();

  const isSelected = selectedConversation._id === user._id;
  const cssClass = isSelected ? "bg-sky-500" : "";
  return (
    <>
      <div
        className={`flex gap-2 items-center ${cssClass} hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
        onClick={() => dispatch(setSelectedConversation(user))}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{user.fullName}</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"> </div>
    </>
  );
};
export default Conversation;
