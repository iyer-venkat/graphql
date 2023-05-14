import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Books in my library",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export default BookType;
