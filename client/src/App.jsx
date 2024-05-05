import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { user: currentUser, refetchUser } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to={"/signin"} />}
          />
          <Route
            path="/signin"
            element={currentUser ? <Navigate to={"/"} /> : <Signin />}
          />
          <Route
            path="/signup"
            element={currentUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
