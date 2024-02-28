import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import ExpressError from "../utils/ExpressError.js";
import genTokenAndSetCookie from "../utils/genTokenAndSetCookie.js";

const authController = {
  signUp: async (req, res, next) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword) {
      return next(new ExpressError(400, "All fields are required"));
    }
    if (password !== confirmPassword) {
      return next(new ExpressError(400, "Passwords do not match"));
    }

    //check for existing user
    const foundUser = await User.findOne({ username: username });
    if (foundUser) {
      return next(new ExpressError(400, "Username already exists"));
    }

    //hash the password
    const hash = bcryptjs.hashSync(password, 12);

    //add proile pic
    const profilePic =
      gender === "male"
        ? "https://avatar.iran.liara.run/public/boy"
        : "https://avatar.iran.liara.run/public/girl";

    //create new user
    const newUser = new User({
      fullName,
      username,
      password: hash,
      profilePic,
      gender,
    });
    try {
      //generate token and set cookie to the response
      genTokenAndSetCookie(res, newUser);
      //save user to db
      const savedUser = await newUser.save();
      res.status(201).json({ success: true, user: savedUser });
    } catch (err) {
      return next(new ExpressError(500, err.message));
    }
  },
  signIn: async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(new ExpressError(400, "All fields are required"));
    }
    const foundUser = await User.findOne({ username: username });
    if (!foundUser) {
      return next(new ExpressError(400, "user not found"));
    }
    const isPasswordValid = bcryptjs.compareSync(password, foundUser.password);
    if (!isPasswordValid) {
      return next(new ExpressError(400, "Invalid password"));
    }

    genTokenAndSetCookie(res, foundUser);
    res.status(200).json(foundUser); //.json() sends the response, terminating the middleware chain
  },
  signOut: (req, res) => {
    //set jwt cookie to none
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "signed out successfully" });
  },
};

export default authController;
