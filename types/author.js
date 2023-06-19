import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import BookType from "./book";
import { bookQueries } from "../query/bookQuery";

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
