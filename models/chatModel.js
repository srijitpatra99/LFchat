const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    message:{
        type: String,
    },
    sendBy:{
        type: String,
    },
    seen:{
        type: Boolean,
    },
    time:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Chat", chatSchema)