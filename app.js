const express = require('express');
const { userRouter } = require('./routes/userRoutes');
const app = express()
const port = process.env.PORT || 5000;



require('dotenv').config()

app.use(express.json())
app.use('/', userRouter)


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})