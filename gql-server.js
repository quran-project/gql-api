const { GraphQLServer } = require('graphql-yoga')

require('dotenv').config()
require('./dbconnect')
const Ayah = require('./resolvers/Ayah')
const Query = require('./resolvers/Query')
const Word = require('./resolvers/Word')
const server = new GraphQLServer({
    typeDefs: __dirname + '/schema.graphql',
    resolvers: {
        Query,
        Ayah,
        Word,
    },
})

server.start(
    {
        port: 5000,
    },
    ({ port }) => {
        console.log('Server working at http://localhost:' + port)
    }
)
