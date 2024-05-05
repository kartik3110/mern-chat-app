import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/users");
        setAllUsers(response.data);
        console.log("all users: ", response.data);
      } catch (error) {
        console.log("error fetching conversations: ", error);
        setAllUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  return {
    allUsers,
    loading,
  };
}
