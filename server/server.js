const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

require("dotenv").config();

//express server
const app = express();
//db
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("DB error", error);
  }
};
//execute db connection
db();

// usage
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./typeDefs"))
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);

//gql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

//applyMiddleware
apolloServer.applyMiddleware({ app });

//server
const httpserver = http.createServer(app);

//rest endpoint
app.get("/rest", function (req, res) {
  res.json({
    data: "It hit the endpoint",
  });
});

//Using Port
app.listen(process.env.PORT, function () {
  console.log(`Server is ready at https://localhost:${process.env.PORT}`);
  console.log(
    `Graphql server is ready at https://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
