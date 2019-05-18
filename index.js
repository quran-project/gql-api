const express = require('express')
const app = express()
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const graphqlHTTP = require('graphql-yoga')

require('dotenv').config()
require('./dbconnect')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(expressSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser())

const schema = require('./schema')
app.use('/gql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})

app.use(express.static(__dirname + '/public'))

const quranRouter = require('./routes/quran')
const noteRouter = require('./routes/note')
app.use(quranRouter)
app.use('/note', noteRouter)