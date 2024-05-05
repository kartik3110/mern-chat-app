import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function useSignout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { refetchUser } = useAuthContext();

  async function signout() {
    setLoading(true);
    try {
      await axios.post("/api/auth/signout");
      await refetchUser();
      toast.success("Logged out successfully");
      // navigate("/signin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    signout,
  };
}
