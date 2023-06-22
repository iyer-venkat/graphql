import books from "../../data/books.json" assert { type: "json" };
import { resolvers as authorResolvers } from "./authorResolver";

export const resolvers = {
  Query: {
    books: () => books,
    book: (id) => books.find((book) => book.id === id),
  },
  Book: {
    author: (book) => {
      return authorResolvers.Query.author(book.authorId);
    },
  },
};
