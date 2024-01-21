import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    console.log(req.cookies, req, "checking");
    const token = req.cookies && req.cookies.access_token;
  
    if (!token) return next(createError(401, "You are not authenticated"));
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(createError(403, "Token is not valid"));
      } else {
        req.user = user;
      }
      next();
    });
  };

export const verifyUser =  (req, res, next) => {
  verifyToken(req, res,() => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

export const verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user,"request");
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};
