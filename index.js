const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  type Query {
    hello: String
    Posts: [Post]
  }
  type Post {
    userId: String
    id: ID
    title: String
    body: String
  }
`

const resolvers = {
  Query: {
    hello: (root, args, ctx) => 'hiiiiii'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(` server running on: ${url}`)
})
