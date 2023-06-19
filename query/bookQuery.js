import BookType from "../types/book.js";
import books from "../data/books.json" assert { "type": "json" };
import { GraphQLInt, GraphQLList } from "graphql";

export const bookQueries = {
  books: {
    type: GraphQLList(BookType),
    description: "List of all Books",
    resolve: () => books,
  },
  book: {
    type: BookType,
    description: "Single Book",
    args: {
      id: { type: GraphQLInt, description: "id of the book" },
    },
    resolve: (_, args) => books.find((book) => book.id === args.id),
  },
};
