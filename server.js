import { graphqlHTTP } from "express-graphql";
import express from "express";
import schema from './schema.js';

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(8000, () => console.log("listening on port 8000"));
