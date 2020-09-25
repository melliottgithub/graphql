const { gql } = require("apollo-server-express");
const { authCheck } = require("../helpers/auth");
const User = require("../models/user");

const name = async (parent, args, { req }) => {
  await authCheck(req);
  return "Mike";
};

const userCreate = async (parent, args, { req }) => {
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });
  return user
    ? user
    : new User({
        email: currentUser.email,
       // username: shortid.generate(),
      }).save();
};

module.exports = {
  Query: {
    name,
  },
  Mutation: {},
};
