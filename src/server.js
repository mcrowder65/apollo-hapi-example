const { ApolloServer } = require("apollo-server-hapi");
const Hapi = require("hapi");
const { typeDefs } = require("./schema");
const resolvers = require("./resolvers/resolvers");
async function StartServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const app = new Hapi.server({
    port: 4000
  });

  await server.applyMiddleware({
    app
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();
  console.log("server started on port 4000");
}

StartServer().catch(error => console.log(error));
