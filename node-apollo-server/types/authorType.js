export const typeDef = `
  extend type Query {
    authors: [Author],
    author(id: Int!): Author
  }  
  
  type Author {
    id: Int!
    name: String
    books: [Book]
  }
`;
