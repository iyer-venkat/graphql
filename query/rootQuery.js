import { GraphQLObjectType, GraphQLList, GraphQLInt } from "graphql";
import { bookQueries } from "./bookQuery";
import { authorQueries } from "./authorQuery";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({ ...bookQueries, ...authorQueries }),
});

export default RootQueryType;
