const { graphiqlHapi, graphqlHapi } = require("apollo-server-hapi");
const { makeExecutableSchema } = require("graphql-tools");
const Hapi = require("hapi");
const { typeDefs } = require("./schema");
const resolvers = require("./resolvers/resolvers");
const startServer = async () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new Hapi.server({ port: 4000 });

  await server.register({
    plugin: graphqlHapi,
    options: {
      path: "/graphql",
      graphqlOptions: {
        schema
      }
    }
  });

  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: "/graphiql",
      graphiqlOptions: {
        schema,
        endpointURL: "/graphql"
      },
      route: {
        cors: true
      }
    }
  });
  console.log("server started on port 4000");
  server.start();
};

startServer();
