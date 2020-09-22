let authorized = true;

exports.authCheck = (re, res, next) => {
  if (authorized) {
    next();
  } else {
    throw new Error("Unauthorized");
  }
};
