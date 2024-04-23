const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("It works!");
};

const registerUser = async (req, res) => {
  let userID = 1;
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6characters long",
      });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({ error: "E-mail is taken!" });
    }

    const existUserID = await User.findOne({ userID });
    if (existUserID) {
      userID++;
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      userID,
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          name: user.name
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
      res.cookie("userID", user.userID).json(user);
    }
    if (!match) {
      res.json({
        error: "Password do not match!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const getUserID = (req, res) => {
  const { userID } = req.cookies;
  if(userID) {
    res.json(userID);
  }
}
module.exports = { test, registerUser, loginUser, getProfile,getUserID };
