import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { refetchUser } = useAuthContext();

  const signup = async (userDetails) => {
    console.log("user in auth ctx ", authCtx.user);
    setLoading(true);
    let res;
    try {
      res = await axios.post("/api/auth/signup", userDetails);
      toast.success("welcome!");
      navigate("/");
      await refetchUser();
    } catch (error) {
      toast.error(error.response.data.err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;
