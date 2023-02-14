const express = require('express')
const { info } = require('../controllers/userController')
const userRouter = express.Router()
userRouter.get("/", info)

module.exports = { userRouter }