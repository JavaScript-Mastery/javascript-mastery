# Day 20 - GraphQL and Apollo

GraphQL is a query language for APIs that was developed by Facebook in 2012. 
It provides a more efficient, powerful and flexible alternative to traditional REST APIs. 
Apollo is a popular implementation of GraphQL that provides a set of tools for building GraphQL servers and clients.

### Understanding GraphQL

GraphQL is a query language that enables clients to request exactly the data they need, and nothing more. 
With REST APIs, the server defines endpoints and the client can only access the data provided by those endpoints. 
With GraphQL, the client can send a query specifying exactly what data it needs, and the server responds with only that data. 
This can result in more efficient and faster data transfers.

### Creating GraphQL servers with Apollo

To create a GraphQL server with Apollo, you will need to use a package called `apollo-server`. 
Here's an example of how to create a basic GraphQL server with Apollo:

```js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
```

This code defines a simple GraphQL schema with one query, and a corresponding resolver function that returns the string 'Hello world!'. 
The `ApolloServer` constructor takes the `typeDefs` and `resolvers` as arguments, and creates a server that can be started using the 
listen method.

### Consuming GraphQL APIs in client-side applications

To consume a GraphQL API in a client-side application, you will need to use a package called `@apollo/client`. 
Here's an example of how to use `@apollo/client` to query a GraphQL API:

```js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        hello
      }
    `
  })
  .then(result => console.log(result.data));
  ```
This code creates an Apollo client and sends a query to a GraphQL server running at `http://localhost:4000/graphql`. 
The `query` method takes a GraphQL query as an argument, and returns a promise that resolves with the query result.

<hr/>

GraphQL is a strongly-typed query language that provides a uniform interface to query data. 
It was designed to address some of the limitations of REST APIs, such as over- and under-fetching of data. 
GraphQL allows the client to specify the exact shape and contents of the data that it needs, which allows for more efficient and 
precise data retrieval.

GraphQL has three main components:

- **Schema:** A GraphQL schema defines the types of data that can be queried and the relationships between them. 
Types can be objects, scalars (like strings and numbers), or enums. 
The schema also defines the operations that can be performed on the data, such as queries and mutations.

- **Query:** A GraphQL query is a request for specific data from a GraphQL API. 
A query specifies the fields that should be returned, as well as any arguments that should be passed to those fields. 
Queries can be nested, which allows for complex data structures to be retrieved in a single request.

- **Resolver:** A resolver is a function that returns data for a specific field in a GraphQL query. 
Resolvers are responsible for fetching data from a data source (such as a database or REST API) and returning it in the appropriate format.

Apollo is a popular implementation of GraphQL that provides a set of tools for building GraphQL servers and clients. 
Here are some of the key features of Apollo:

1. **Server:** `apollo-server` is a package that provides a framework for building GraphQL servers. 
It includes tools for defining a schema, creating resolvers, and handling requests.

2. **Client:** `@apollo/client` is a package that provides a set of tools for consuming GraphQL APIs in client-side applications. 
It includes a client that can be used to send queries to a GraphQL server, as well as utilities for caching and managing data.

3. **State management:** Apollo provides a way to manage application state using a client-side cache. 
This allows for more efficient updates and reduces the need for complex data fetching logic in components.

Overall, GraphQL and Apollo provide a powerful and flexible way to build and consume APIs that can make your web development
projects more efficient and performant. 
