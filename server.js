import { graphqlHTTP } from "express-graphql";
import express from "express";
import schema from "./schema.js";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(8000, () => console.log("listening on port 8000"));

/// GQL Videos
// https://www.youtube.com/watch?v=Tcnon8qBCtw
// https://www.youtube.com/watch?v=7JrwiBnjBPw
// https://www.youtube.com/watch?v=EgVpTwpbeU4
// https://www.youtube.com/watch?v=uPxo9NQLVMI
// https://www.youtube.com/watch?v=ZQL7tL2S0oQ

/// Learn GQL
// https://graphql.org/learn
// https://www.apollographql.com/
// https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/

/// GQL apollo-server
// https://snyk.io/advisor/npm-package/apollo-server/functions/apollo-server.makeExecutableSchema

/// Public GQL APIs
// https://www.apollographql.com/blog/community/backend/8-free-to-use-graphql-apis-for-your-projects-and-demos/
// https://github.com/graphql-kit/graphql-apis
// https://stepzen.com/blog/free-public-graphql-apis
// https://blog.graphqleditor.com/best-graphql-apis-to-play-with
// https://www.postman.com/cs-demo/workspace/public-graphql-apis/request/8854915-b43151eb-0107-4387-b90b-3ce4cc9c6a02

///
/// Public OData API List
// https://www.odata.org/odata-services/

/// How OData Works
// https://www.progress.com/tutorials/odata/connecting-to-odata-service-from-nodejs-or-nextjs

/// OData NPM Pkg
// https://www.npmjs.com/package/odata
