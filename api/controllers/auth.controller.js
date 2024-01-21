import Role from "../models/Role.js";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import { createSuccess } from "../utils/success.js";

export const register = async (req, res, next) => {
  try {
    const role = await Role.find({ role: "User" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      roles: role,
    });
    await newUser.save();
    return next(createSuccess(200, "User Created SuccessFully..!"));
  } catch (error) {
    return next(createError(500, "Internal Server Error"));
  }
};

export const registerAdmin = async (req, res, next) => {
  try {
    const role = await Role.find({});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      isAdmin: true,
      roles: role,
    });
    await newUser.save();
    return next(createSuccess(200, "Admin Created SuccessFully..!"));
  } catch (error) {
    return next(createError(500, "Internal Server Error"));
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "roles",
      "role"
    );
    const { roles } = user;
    if (!user) {
      return res.status(404).send("User Not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "password is Incorrect..!"));
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, roles: roles },
      process.env.JWT_SECRET
    );

     res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      status: 200,
      message: "login Success",
      data: user,
    });

    // return next(createSuccess(200, "Login Success..!"));
  } catch (error) {
    console.log(error);
    return next(createSuccess(500, "Internal Server Error..!"));
  }
};
