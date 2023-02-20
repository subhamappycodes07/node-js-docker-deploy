const express = require('express');
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require('./config/config');
const { userRouter } = require('./routes/userRoutes');
const app = express()
const port = process.env.PORT || 5000;

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("connected to DB")).catch((err) => {
        console.log(err)
        setTimeout(connectWithRetry, 5000)
    })
}


connectWithRetry()


require('dotenv').config()

app.use(express.json())
app.use('/', userRouter)


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})