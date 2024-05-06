import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import { setSelectedConversation } from "../../features/conversation/conversationSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SearchInput = () => {
  const { allUsers } = useGetConversations();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchedName = formData.get("search");
    if (searchedName.trim().length < 3) {
      toast.error("Search query must be at least 3 characters long");
      return;
    }
    const foundUser = allUsers?.find((user) =>
      user.fullName.toLowerCase().includes(searchedName.toLowerCase())
    );
    if (!foundUser) {
      toast.error("No matching user found");
      return;
    }
    dispatch(setSelectedConversation(foundUser));
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
