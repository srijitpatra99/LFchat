const express = require("express")
const { getAllChats, createChat, deleteChat, updateChat } = require("../controllers/chatController")

const router = express.Router()

router.route("/chats").get(getAllChats);
router.route("/chats/new").post(createChat);
router.route("/chats/delete").delete(deleteChat);
router.route("/chats/update").patch(updateChat);


module.exports = router