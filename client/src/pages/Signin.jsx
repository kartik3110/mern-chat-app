import { Link } from "react-router-dom";
import useSignin from "../hooks/useSignin";

const Signin = () => {
  const { signin, loading } = useSignin();

  const handleSignin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userDetails = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    await signin(userDetails);
  };
  return (
    <div className="flex w-1/3 min-h-screen flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signin
          <span className="text-blue-500"> Page</span>
        </h1>

        <form onSubmit={handleSignin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm underline text-blue-200 hover:text-blue-300 my-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className="btn hover:bg-gray-600 btn-block btn-sm mt-2"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
