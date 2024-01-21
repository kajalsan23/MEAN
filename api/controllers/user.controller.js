import { createError } from "../utils/error.js";
import { createSuccess } from "../utils/success.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return next(createSuccess(200, users));
  } catch (error) {
    return next(createError(500, "Internal Server Error"));
  }
};

export const getById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(createError(404, "user not found"));
    } else {
      return next(createSuccess(200, "single User",user));
    }
  } catch (error) {
    return next(createError(500, "Internal Server Error"));
  }
};

// get name from get method

export const findByName = async (req, res, next) => {
  try {
    console.log(req.params);

    const findName = await User.find({ firstName: req.params.name });
    return next(createSuccess(200, findName));
  } catch (error) {
    return next(createError(500, error));
  }
};

// get name from post method

export const findByNameUsingPost = async (req, res, next) => {
  try {
    const findName = await User.find({ firstName: req.body.firstName });

    return next(createSuccess(200, findName));
  } catch (error) {
    return next(createError(500, error));
  }
};

export const searchFunctionality = async (req, res, next) => {
  try {
    const findName = req.params.name;
    const objs = await User.find({
      firstName: { $regex: new RegExp(".*" + findName + ".*", "i") },
    });
    return next(createSuccess(200, objs));
  } catch (error) {
    return next(createError(500, error));
  }
};
