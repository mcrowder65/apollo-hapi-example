const connectors = require("../connectors/connectors");
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

const getPosts = async () => {
  await sleep(500);
  return connectors.getPosts();
};

const updatePost = (_, post) => {
  connectors.updatePost(post);
  return getPosts();
};

const deletePost = (_, { id } = {}) => {
  connectors.deletePost(id);
  return getPosts();
};

const createPost = (_, { title, body } = {}) => {
  connectors.createPost({ title, body });
  return getPosts();
};
module.exports = {
  getPosts,
  updatePost,
  deletePost,
  createPost
};
