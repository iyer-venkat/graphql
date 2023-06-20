import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import AuthorType, { createAuthor, updateAuthor } from "../types/author";

export const authorMutations = {
  addAuthor: {
    type: AuthorType,
    description: "Add a Author",
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => {
      return createAuthor(args);
    },
  },
  updateAuthor: {
    type: AuthorType,
    description: "Update a Author",
    args: {
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => {
      return updateAuthor(args);
    },
  },
};
