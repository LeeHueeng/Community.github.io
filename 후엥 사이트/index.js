const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Query {
    communitys: [community]
  }
  type community {
    order: Int
    title: String
    main: String
    name: String
    email: String
    password: String
  }
`
const resolvers = {
  Query: {
    communitys: () => database.communitys
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)

})
