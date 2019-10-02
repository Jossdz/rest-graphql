const {ApolloServer, gql} = require('apollo-server')
const DataSource = require('./dataSource')

const typeDefs = gql`
  type Query {
    hello: String
    Posts: [Post]
  }
  type Mutation {
    addPost(title: String, body: String, userId: String): Post
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
    hello: (root, args, ctx) => 'hiiiiii',
    Posts: (_, __, {dataSources}) => dataSources.DataSource.getPosts()
  },
  Mutation: {
    addPost: async (_, args, {dataSources}) =>
      dataSources.DataSource.createPost(args)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    DataSource: new DataSource()
  })
})

server.listen().then(({url}) => {
  console.log(` server running on: ${url}`)
})
