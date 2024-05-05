import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { allUsers, loading } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {allUsers.map((user) => {
        return <Conversation loading={loading} key={user._id} user={user} />;
      })}
    </div>
  );
};
export default Conversations;
