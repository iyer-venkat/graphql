import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import BookType, { createBook, updateBook } from "../types/book";

export const bookMutations = {
  addBook: {
    type: BookType,
    description: "Add a book",
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      authorId: { type: GraphQLNonNull(GraphQLInt) },
      // genreId: { type: GraphQLString },
      // publisherId: { type: GraphQLString },
      // description: { type: GraphQLString },
    },
    resolve: (parent, args) => {
      return createBook(args);
    },
  },
  updateBook: {
    type: BookType,
    description: "Update a book",
    args: {
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
      authorId: { type: GraphQLNonNull(GraphQLInt) },
      // genreId: { type: GraphQLString },
      // publisherId: { type: GraphQLString },
      // description: { type: GraphQLString },
    },
    resolve: (parent, args) => {
      return updateBook(args);
    },
  },
};
