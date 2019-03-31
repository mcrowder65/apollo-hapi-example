const postsResolvers = require("./posts");
const resolvers = {
  Query: {
    posts: postsResolvers.getPosts
  },
  Mutations: {
    updatePost: postsResolvers.updatePost,
    deletePost: postsResolvers.deletePost,
    createPost: postsResolvers.createPost
  }
};

module.exports = resolvers;
