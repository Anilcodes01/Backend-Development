require('dotenv').config()
const express = require('express');

const PORT = 4000
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world, this is my first backend Code!')
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server app listening on port ${PORT}`)
})