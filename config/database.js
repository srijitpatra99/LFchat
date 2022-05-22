const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/chat", {useUnifiedTopology:true}).then((data) => {
    console.log(`mongoDB connected width server: ${data.connection.host}`)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDatabase