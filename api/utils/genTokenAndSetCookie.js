import jwt from "jsonwebtoken";
const genTokenAndSetCookie = (res, user) => {
  var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    httpOnly: true, // make cookie unaccessible to client side js
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // cookie is not sent along with requests initiated by third-party websites.
    secure: process.env.NODE_ENV === "production", // cookie will only be sent if website is accessed over HTTPS
  });
};

export default genTokenAndSetCookie;
