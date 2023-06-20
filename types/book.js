import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import AuthorType from "./author";
import { authorQueries } from "../query/authorQuery";
import books from "../data/books.json" assert { "type": "json" };

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Books in my library",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => authorQueries.author.resolve(book),
    },
  }),
});

export default BookType;

export const createBook = (book) => {
  const bookId = Math.max(...books.map((b) => b.id)) + 1;
  const newBook = {
    id: bookId,
    ...book,
  };
  books.push(newBook);
  return newBook;
};

export const updateBook = (book) => {
  const bookToUpdate = books.find((b) => b.id === book.id);
  if (bookToUpdate === undefined) throw new Error("Book not found");
  const index = books.indexOf(bookToUpdate);
  const updatedBook = {
    ...bookToUpdate,
    ...book,
  };
  books.splice(index, 1, updatedBook);

  return updatedBook;
};
