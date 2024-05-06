import { BiLogOut } from "react-icons/bi";
import useSignout from "../../hooks/useSignout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, signout } = useSignout();
  const { user: currentUser } = useAuthContext();

  return (
    <div className="mt-2 relative top-4">
      {!loading ? (
        <div className="flex">
          <BiLogOut
            className="w-6 h-6 text-white cursor-pointer"
            onClick={signout}
          />
          <span className="text-sm pt-0.5">
            &nbsp; logged in: {currentUser.fullName}
          </span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
