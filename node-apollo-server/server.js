import "colors";
import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import lodash from "lodash";
// import mongoose from 'mongoose';
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

import { typeDef as authorTypes } from "./types/authorType";
import { resolvers as authorResolvers } from "./resolvers/authorResolver";
import { typeDef as bookTypes } from "./types/bookType";
import { resolvers as bookResolvers } from "./resolvers/bookResolver";

const API_PORT = 4000;

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: [typeDefs, authorTypes, bookTypes],
    resolvers: lodash.merge(resolvers, authorResolvers, bookResolvers),
  }),
});

server
  .listen(API_PORT)
  .then(({ url }) => {
    console.log(`Server ready at:`.green + `${url}`.yellow);
    console.log(
      `GraphQL Playground:`.magenta +
        `https://studio.apollographql.com/dev`.yellow
    );
    // mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true});
    // mongoose.connection.once('open', () => {
    // mongoose.connection.once('open', () => {
    //     console.log('Connected to database'.green);
    // });
  })
  .catch((e) => {
    console.log(e.message.red);
    process.exit(1);
  });
