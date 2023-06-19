import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import AuthorType from "./author";
import { authorQueries } from "../query/authorQuery";

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
