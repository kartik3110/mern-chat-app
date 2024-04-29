import User from "../models/User.model.js";
import ExpressError from "../utils/ExpressError.js";

const userController = {
  getAllUsers: async (req, res) => {
    const { _id: senderId } = req.user;
    const allUsersExceptMe = await User.find({ _id: { $ne: senderId } }).select(
      "-password"
    );
    res.status(200).json(allUsersExceptMe);
  },

  getCurrentUser: async (req, res) => {
    const { _id: senderId } = req.user;
    const foundUser = await User.findOne({ _id: senderId }).select("-password");
    if (!foundUser) return next(new ExpressError("User not found", 404));
    res.status(200).json(foundUser);
  },
};

export default userController;
