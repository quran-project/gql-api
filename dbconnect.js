//Import mongoose library
const mongoose = require('mongoose');

//connect db
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(res => {
        console.log('database connected')
    })
    .catch(err => {
        console.log('database disconnected')
    })