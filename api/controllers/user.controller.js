import User from "../models/User.model.js";

const userController = {
  getAllUsers: async (req, res) => {
    const { _id: senderId } = req.user;

    const allUsersExceptMe = await User.find({ _id: { $ne: senderId } }).select(
      "-password"
    );

    res.status(200).json(allUsersExceptMe);
  },
};

export default userController;
