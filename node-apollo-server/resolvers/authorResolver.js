import authors from "../../data/authors.json" assert { type: "json" };
import { resolvers as bookResovlers } from "./bookResolver";

export const resolvers = {
  Query: {
    authors: () => authors,
    author: (id) => authors.find((author) => author.id === id),
  },
  Author: {
    books: (author) =>
      bookResovlers.Query.books().filter((book) => book.authorId === author.id),
  },
};
