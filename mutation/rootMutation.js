import { GraphQLObjectType } from "graphql";
import { bookMutations } from "./bookMutation";
import { authorMutations } from "./authorMutation";

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({ ...bookMutations, ...authorMutations }),
});

export default RootMutationType;
