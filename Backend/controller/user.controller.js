import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists ..." });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const createdUser = await User.create({
          name,
          email,
          password: hash,
        });
        res.send(createdUser);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user == null) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (!result) {
          return res
            .status(400)
            .json({ message: "Invalid Username or Password" });
        } else {
          res.status(200).json({
            message: "Logged In Successfully ...",
            user: {
              id: user._id,
              username: user.name,
              email: user.email,
            },
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
