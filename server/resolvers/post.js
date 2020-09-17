const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

//queries
const totalPosts = () => posts.length;
const allPosts = () => posts;
//mutation
const newPost = (parent, args) => {
  //creating a new post object
  const post = {
    id: posts.length + 1,
    ...args.input,
  };

  //pushing new post
  posts.push(post);
  //return new post
  return post;
};

module.exports = {
  Query: {
    totalPosts,
    allPosts,
  },
  Mutation: {
    newPost,
  },
};
