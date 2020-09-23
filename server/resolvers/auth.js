const { gql } = require("apollo-server-express");
const { authCheck } = require("../helpers/auth");

const name = async (parent, args, { req }) => {
  await authCheck(req);
  return "Mike";
};

module.exports = {
  Query: {
    name,
    
  },
};
