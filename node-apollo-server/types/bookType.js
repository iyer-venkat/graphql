export const typeDef = `
  extend type Query {
    books: [Book],
    book(id: Int!): Book
  }  
  
  type Book {
    id: Int!
    name: String
    authorId: Int!
    author: Author
  }
`;
