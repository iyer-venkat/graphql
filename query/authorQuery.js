import AuthorType from "../types/author.js";
import authors from "../data/authors.json" assert { "type": "json" };
import { GraphQLInt, GraphQLList } from "graphql";

export const authorQueries = {
  authors: {
    type: GraphQLList(AuthorType),
    description: "List of all Authors",
    resolve: () => authors,
  },
  author: {
    type: AuthorType,
    description: "Single Author",
    args: {
      id: { type: GraphQLInt, description: "id of the author" },
    },
    resolve: (parent, args) =>
      authors.find((author) => author.id === (parent.authorId || args.id)),
  },
};
