import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSignout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signout() {
    setLoading(true);
    try {
      await axios.post("/api/auth/signout");
      toast.success("Logged out successfully");
      navigate("/signin");
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
