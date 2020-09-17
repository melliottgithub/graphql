const { ApolloServer } = require("apollo-server");
require("dotenv").config();

//types: query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;
//resolvers query
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

//gql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

//Using Port
apolloServer.listen(process.env.PORT, function () {
  console.log(
    `Graphql server is ready at https://localhost:${process.env.PORT}`
  );
});
