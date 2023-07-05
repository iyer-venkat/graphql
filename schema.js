import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import RootQueryType from "./query/rootQuery";
import RootMutationType from "./mutation/rootMutation";

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
  mutation: RootMutationType,
});

export default schema;

/*
{
  leftComparison: author(id: 3) {
    ...comparisonFields
  }
  rightComparison: author(id: 2) {
    ...comparisonFields
  }
}

fragment comparisonFields on Author {
  name
  books {
    name
  }
}
*/
