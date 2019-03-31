const connectors = require("../connectors/connectors");
const getPosts = () => {
  return connectors.getState().posts;
};

const updatePost = (_, post) => {
  connectors.dispatch(connectors.updatePost(post));
  return getPosts();
};

const deletePost = (_, { id } = {}) => {
  connectors.dispatch(connectors.deletePost(id));
  return getPosts();
};

const createPost = (_, { title, body } = {}) => {
  connectors.dispatch(connectors.createPost({ title, body }));
  return getPosts();
};
module.exports = {
  getPosts,
  updatePost,
  deletePost,
  createPost
};
