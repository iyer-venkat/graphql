import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import RootQueryType from "./types/rootQuery.js";

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "HelloWorld",
//     fields: () => ({
//       message: {
//         type: GraphQLString,
//         resolve: () => "Hello World!",
//       },
//     }),
//   }),
// });

const schema = new GraphQLSchema({
  query: RootQueryType,
});

export default schema;