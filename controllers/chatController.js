const Chat = require('../models/chatModel')


// Create chat

exports.createChat = async (req, res, next) => {
    
    const chat = await  Chat.create(req.body);

    res.status(201).json({
        success: true, 
        chat
    })
}

// Get all chats

exports.getAllChats = async (req, res) => {

    const chats = await Chat.find();
    
    res.status(200).json({
        success:true,
        chats
    })

}

// Delete a Chat

exports.deleteChat = async (req, res, next) => {

    const chat = await Chat.findById(req.body.id)

    if(!chat){
        res.status(404).json({
            message:"chat not found"
        })
    }

    await chat.remove()

    res.status(200).json({
        success:true,
        message:"chat deleted successfully",
        chat:chat,
    })

}

// Update chat

exports.updateChat = async (req, res, next) => {

    let chat = await Chat.findById(req.body.id)

    chat = await Chat.findByIdAndUpdate(req.body.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        chat
    })

}