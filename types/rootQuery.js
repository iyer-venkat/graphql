import {
  GraphQLObjectType,
  GraphQLList,
} from "graphql";
import BookType from "./book.js";
import data from "../db.json" assert { type: "json" };

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    books: {
      type: GraphQLList(BookType),
      description: "List of all Books",
      resolve: () => data.data.books,
    }
  }),
});

export default RootQueryType;
