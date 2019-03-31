const typeDefs = `
type Post {
  id: String
  title: String
  body: String
}

type Query {
  posts: [Post]
}
type Mutations {
  updatePost(id: String, title: String, body: String): [Post]
  deletePost(id: String): [Post]
  createPost(title: String, body: String): [Post]
  
}
schema {
  query: Query
  mutation: Mutations
}`;

module.exports = {
  typeDefs
};
