import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: {
    username: "",
    email: "",
    profilePic: "",
  },
  refetchUser: async () => {}, // Function to refetch user data
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("api/users/currentUser");
      setUser(response.data);
    } catch (error) {
      console.log("error fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const refetchUser = async () => {
    await fetchUserData();
  };

  return (
    <AuthContext.Provider value={{ user, refetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};
