import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "Author of the book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export default AuthorType;
