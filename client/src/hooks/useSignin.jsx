import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { refetchUser } = useAuthContext();

  const signin = async (userDetails) => {
    setLoading(true);
    let res;
    try {
      res = await axios.post("/api/auth/signin", userDetails);
      toast.success("welcome Back!");
      navigate("/");
      await refetchUser();
    } catch (error) {
      toast.error(error.response.data.err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signin };
};
export default useSignin;
