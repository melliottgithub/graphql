const { gql } = require("apollo-server-express");

const name = () => "Mike";

module.exports = {
  Query: {
    name,
  },
};
