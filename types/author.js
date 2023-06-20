import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import BookType from "./book";
import { bookQueries } from "../query/bookQuery";
import authors from "../data/authors.json" assert { "type": "json" };

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "Author of the book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => bookQueries.booksByAuthor.resolve(0, author),
    },
  }),
});

export default AuthorType;

export const createAuthor = (author) => {
  const authorId = Math.max(...authors.map((a) => a.id)) + 1;
  const newAuthor = {
    id: authorId,
    ...author,
  };
  authors.push(newAuthor);
  return newAuthor;
};

export const updateAuthor = (author) => {
  const authorToUpdate = authors.find((a) => a.id === author.id);
  if (authorToUpdate === undefined) throw new Error("Author not found");
  const index = authors.indexOf(authorToUpdate);
  const updatedauthor = {
    ...authorToUpdate,
    ...author,
  };
  authors.splice(index, 1, updatedauthor);

  return updatedauthor;
};
